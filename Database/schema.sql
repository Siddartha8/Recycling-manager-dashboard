-- ===============================
-- DATABASE: recycling_hiring
-- ===============================

CREATE DATABASE IF NOT EXISTS recycling_hiring;
USE recycling_hiring;

-- ===============================
-- TABLE: candidates
-- ===============================
CREATE TABLE candidates (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    experience_years TINYINT UNSIGNED NOT NULL CHECK (experience_years <= 50),
    skills JSON NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_experience (experience_years)
) ENGINE=InnoDB;

-- ===============================
-- TABLE: evaluations
-- ===============================
CREATE TABLE evaluations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    candidate_id INT NOT NULL,
    crisis_management_score TINYINT UNSIGNED NOT NULL CHECK (crisis_management_score BETWEEN 0 AND 10),
    sustainability_score TINYINT UNSIGNED NOT NULL CHECK (sustainability_score BETWEEN 0 AND 10),
    team_motivation_score TINYINT UNSIGNED NOT NULL CHECK (team_motivation_score BETWEEN 0 AND 10),
    evaluated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_candidate_eval
        FOREIGN KEY (candidate_id)
        REFERENCES candidates(id)
        ON DELETE CASCADE,

    UNIQUE KEY uq_candidate_eval (candidate_id)
) ENGINE=InnoDB;

-- ===============================
-- TABLE: rankings
-- ===============================
CREATE TABLE rankings (
    candidate_id INT PRIMARY KEY,
    total_score TINYINT UNSIGNED NOT NULL,
    rank_position INT NOT NULL,

    CONSTRAINT fk_candidate_rank
        FOREIGN KEY (candidate_id)
        REFERENCES candidates(id)
        ON DELETE CASCADE,

    INDEX idx_rank (rank_position)
) ENGINE=InnoDB;

-- ===============================
-- TRIGGER: auto update rankings
-- ===============================
DELIMITER $$

CREATE TRIGGER trg_update_rankings
AFTER INSERT ON evaluations
FOR EACH ROW
BEGIN
    -- Insert or update total score
    INSERT INTO rankings (candidate_id, total_score, rank_position)
    VALUES (
        NEW.candidate_id,
        NEW.crisis_management_score +
        NEW.sustainability_score +
        NEW.team_motivation_score,
        0
    )
    ON DUPLICATE KEY UPDATE
        total_score = VALUES(total_score);

    -- Recalculate ranking
    SET @rank := 0;
    UPDATE rankings r
    JOIN (
        SELECT candidate_id, total_score
        FROM rankings
        ORDER BY total_score DESC
    ) sorted
    ON r.candidate_id = sorted.candidate_id
    SET r.rank_position = (@rank := @rank + 1);
END$$

DELIMITER ;
