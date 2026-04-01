import { PlanStatus } from "@/data/planItems";

export function StatusBadge({ status }: { status: PlanStatus | string }) {
  const cls: Record<string, string> = {
    done: 'badge-done',
    in_progress: 'badge-in-progress',
    not_started: 'badge-not-started',
    delayed: 'badge-investigating',
    arrested: 'badge-arrested',
    investigating: 'badge-investigating',
    charged: 'badge-charged',
    free: 'badge-not-started',
    ARRESTED: 'badge-arrested',
    'Under investigation': 'badge-investigating',
    'Named for prosecution': 'badge-investigating',
    'Previously arrested': 'badge-investigating',
    Free: 'badge-not-started',
  };

  const labels: Record<string, string> = {
    done: 'Done',
    in_progress: 'In Progress',
    not_started: 'Not Started',
    delayed: 'Delayed',
    arrested: 'Arrested',
    investigating: 'Investigating',
    charged: 'Charged',
    free: 'Free',
  };

  return (
    <span className={cls[status] || 'badge-not-started'}>
      {labels[status] || status}
    </span>
  );
}
