import { Progress, Text, Stack, Group } from "@mantine/core";

export default function SkillBars({ scores }) {
  return (
    <Stack spacing="xs">
      <Group justify="space-between">
        <Text size="sm">Crisis Management</Text>
        <Text size="sm" c="dimmed">
          {scores.crisis}/10
        </Text>
      </Group>
      <Progress value={scores.crisis * 10} color="red" radius="xl" />

      <Group justify="space-between">
        <Text size="sm">Sustainability</Text>
        <Text size="sm" c="dimmed">
          {scores.sustainability}/10
        </Text>
      </Group>
      <Progress
        value={scores.sustainability * 10}
        color="green"
        radius="xl"
      />

      <Group justify="space-between">
        <Text size="sm">Team Motivation</Text>
        <Text size="sm" c="dimmed">
          {scores.motivation}/10
        </Text>
      </Group>
      <Progress
        value={scores.motivation * 10}
        color="blue"
        radius="xl"
      />
    </Stack>
  );
}
