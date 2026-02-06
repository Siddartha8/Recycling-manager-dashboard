import {
  Container,
  Grid,
  Title,
  Text,
  Paper,
  Badge,
  Group,
  SimpleGrid,
  ThemeIcon,
  rem
} from "@mantine/core";
import { useMemo } from "react";
import { candidates } from "../data/mockData";
import LeaderboardTable from "../components/LeaderboardTable";
import CandidateCard from "../components/CandidateCard";

// Helper component for Stat Cards
function StatCard({ title, value, icon, color }) {
  return (
    <Paper withBorder p="md" radius="md" shadow="sm">
      <Group justify="space-between">
        <div>
          <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
            {title}
          </Text>
          <Title order={2} mt={4}>
            {value}
          </Title>
        </div>
        <ThemeIcon color={color} variant="light" size={48} radius="md">
          <Text size="xl">{icon}</Text>
        </ThemeIcon>
      </Group>
    </Paper>
  );
}

export default function Dashboard() {
  const sortedCandidates = useMemo(() => {
    return [...candidates].sort(
      (a, b) =>
        b.scores.crisis +
        b.scores.sustainability +
        b.scores.motivation -
        (a.scores.crisis +
          a.scores.sustainability +
          a.scores.motivation)
    );
  }, []);

  const topScore =
    sortedCandidates[0].scores.crisis +
    sortedCandidates[0].scores.sustainability +
    sortedCandidates[0].scores.motivation;

  const avgExperience = Math.round(
    candidates.reduce((sum, c) => sum + c.experience, 0) / candidates.length
  );

  return (
    <Container size="xl" py="xl">
      {/* HEADER SECTION with Gradient */}
      <Paper
        p="xl"
        radius="lg"
        mb="xl"
        style={{
            // A more modern gradient
            backgroundImage: 'linear-gradient(120deg, #228be6 0%, #15aabf 100%)',
            color: 'white'
        }}
      >
        <Group justify="space-between" align="center">
          <div style={{ color: 'white' }}>
            <Title order={2} style={{ color: 'white' }}>Recycling Line Manager</Title>
            <Text mt={6} style={{ color: 'rgba(255,255,255,0.8)' }}>
              AI-assisted candidate evaluation system
            </Text>
          </div>
          <Badge 
            size="lg" 
            variant="filled" 
            color="white" 
            style={{ color: '#228be6' }}
          >
            Internship Assignment
          </Badge>
        </Group>
      </Paper>

      {/* STATS ROW */}
      <SimpleGrid cols={{ base: 1, sm: 3 }} mb={30}>
        <StatCard 
            title="Total Candidates" 
            value={candidates.length} 
            icon="👥" 
            color="blue" 
        />
        <StatCard 
            title="Highest Score" 
            value={`${topScore}/30`} 
            icon="🚀" 
            color="green" 
        />
        <StatCard 
            title="Avg Experience" 
            value={`${avgExperience} yrs`} 
            icon="💼" 
            color="orange" 
        />
      </SimpleGrid>

      {/* MAIN CONTENT GRID */}
      <Grid gutter="xl">
        {/* LEFT COLUMN: Leaderboard */}
        <Grid.Col span={{ base: 12, md: 12 }}>
           <LeaderboardTable data={sortedCandidates} />
        </Grid.Col>

        {/* BOTTOM ROW: Detailed Cards */}
        <Grid.Col span={12}>
            <Title order={3} mb="md">Detailed Evaluations</Title>
            <Grid>
                {sortedCandidates.map((candidate, index) => (
                <Grid.Col key={candidate.id} span={{ base: 12, sm: 6, lg: 4 }}>
                    <CandidateCard
                    candidate={candidate}
                    isTop={index === 0}
                    />
                </Grid.Col>
                ))}
            </Grid>
        </Grid.Col>
      </Grid>

      {/* FOOTER NOTE - Added as requested */}
      <Text c="dimmed" size="xs" ta="center" mt={50} mb="xl">
        This dashboard demonstrates AI-assisted candidate evaluation using simulated data.
      </Text>
    </Container>
  );
}