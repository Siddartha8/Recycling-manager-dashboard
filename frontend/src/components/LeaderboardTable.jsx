import {
  Card,
  Title,
  Text,
  Table,
  Badge,
  Avatar,
  Group,
  Progress,
  ThemeIcon,
} from "@mantine/core";

export default function LeaderboardTable({ data }) {
  return (
    <Card withBorder radius="lg" p="xl" mb="xl" shadow="sm">
      <Group justify="space-between" mb="lg">
        <div>
          <Title order={3}>🏆 Top Ranked Candidates</Title>
          <Text size="sm" c="dimmed" mt={4}>
            Ranked by AI-evaluated crisis handling, sustainability, & leadership
          </Text>
        </div>
      </Group>

      <Table
        verticalSpacing="md"
        horizontalSpacing="lg"
        withColumnBorders={false}
      >
        <Table.Thead>
          <Table.Tr>
            <Table.Th style={{ width: 80 }}>Rank</Table.Th>
            <Table.Th>Candidate</Table.Th>
            <Table.Th>Focus Area</Table.Th>
            <Table.Th style={{ textAlign: "right" }}>Total Score</Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {data.map((c, index) => {
            const totalScore =
              c.scores.crisis + c.scores.sustainability + c.scores.motivation;
            const maxScore = 30;
            const scorePct = (totalScore / maxScore) * 100;

            const initials = c.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase();

            return (
              <Table.Tr key={c.id} className="hover-row">
                {/* RANK */}
                <Table.Td>
                  {index === 0 ? (
                    <ThemeIcon color="yellow" variant="light" size="lg" radius="xl">
                      👑
                    </ThemeIcon>
                  ) : index === 1 ? (
                    <ThemeIcon color="gray" variant="light" size="lg" radius="xl">
                      🥈
                    </ThemeIcon>
                  ) : index === 2 ? (
                    <ThemeIcon color="orange" variant="light" size="lg" radius="xl">
                      🥉
                    </ThemeIcon>
                  ) : (
                    <Text fw={600} c="dimmed" ml="sm">
                      #{index + 1}
                    </Text>
                  )}
                </Table.Td>

                {/* CANDIDATE */}
                <Table.Td>
                  <Group gap="sm">
                    <Avatar color="blue" radius="xl">
                      {initials}
                    </Avatar>
                    <div>
                      <Text fw={500}>{c.name}</Text>
                      <Text size="xs" c="dimmed">
                        {c.experience} years exp.
                      </Text>
                    </div>
                  </Group>
                </Table.Td>

                {/* FOCUS AREA */}
                <Table.Td>
                  {c.scores.sustainability >= 8 ? (
                    <Badge color="green" variant="dot">
                      Sustainability
                    </Badge>
                  ) : c.scores.crisis >= 8 ? (
                    <Badge color="red" variant="dot">
                      Crisis Mgmt
                    </Badge>
                  ) : (
                    <Badge color="blue" variant="dot">
                      Generalist
                    </Badge>
                  )}
                </Table.Td>

                {/* SCORE */}
                <Table.Td style={{ textAlign: "right" }}>
                  <Group justify="flex-end" gap="xs">
                    <Text fw={700} size="md">
                      {totalScore}
                    </Text>
                    <Text size="xs" c="dimmed">
                      /30
                    </Text>
                  </Group>
                  <Progress
                    value={scorePct}
                    color={scorePct > 80 ? "green" : "blue"}
                    size="sm"
                    mt={4}
                    radius="xl"
                  />
                </Table.Td>
              </Table.Tr>
            );
          })}
        </Table.Tbody>
      </Table>
    </Card>
  );
}