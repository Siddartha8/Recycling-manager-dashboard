import { Card, Text, Title, Divider, Group, Badge, Avatar } from "@mantine/core";
import SkillBars from "./SkillBars";

export default function CandidateCard({ candidate, isTop }) {
  const initials = candidate.name.split(" ").map(n => n[0]).join("");

  return (
    <Card
      withBorder
      radius="lg"
      p="lg"
      shadow="sm"
      // Add hover effect
      style={{
        transition: "transform 0.2s, box-shadow 0.2s",
        cursor: "pointer",
        ...(isTop ? { border: "2px solid #22c55e", background: "#f0fdf4" } : {})
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "var(--mantine-shadow-sm)";
      }}
    >
      <Group justify="space-between" mb="xs">
        <Group>
            <Avatar color={isTop ? "green" : "blue"} radius="xl">{initials}</Avatar>
            <div>
                <Title order={5}>{candidate.name}</Title>
                <Text size="xs" c="dimmed">ID: #{candidate.id}</Text>
            </div>
        </Group>

        {isTop && (
          <Badge color="green" variant="filled">
            🏆 #1 Choice
          </Badge>
        )}
      </Group>

      <Divider my="sm" />
      
      <Text size="xs" c="dimmed" mb="xs" tt="uppercase" fw={700}>
        AI Skill Analysis
      </Text>
      <SkillBars scores={candidate.scores} />
    </Card>
  );
}