export type AuditEvent = {
  action: string;
  actor: "system" | "customer" | "provider" | "admin";
  idempotencyKey?: string;
  nextState?: string;
  prevState?: string;
  providerEventId?: string;
  requestId: string;
  result: "accepted" | "rejected" | "mocked";
  targetId: string;
  targetType: "order" | "payment" | "license" | "download" | "ticket";
  timestamp: string;
};

export function createAuditEvent(event: Omit<AuditEvent, "timestamp">): AuditEvent {
  return {
    ...event,
    timestamp: new Date().toISOString(),
  };
}

export function redactAuditEvent(event: AuditEvent): AuditEvent {
  return {
    ...event,
    idempotencyKey: event.idempotencyKey ? hashLike(event.idempotencyKey) : undefined,
    providerEventId: event.providerEventId ? hashLike(event.providerEventId) : undefined,
  };
}

function hashLike(value: string) {
  if (value.length <= 8) {
    return "redacted";
  }

  return `${value.slice(0, 4)}...${value.slice(-4)}`;
}
