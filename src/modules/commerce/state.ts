export const orderStates = [
  "draft",
  "pending_payment",
  "paid",
  "fulfillment_pending",
  "fulfilled",
  "completed",
  "failed",
  "expired",
  "cancelled",
  "manual_review",
  "refunded",
] as const;

export type StrictOrderState = (typeof orderStates)[number];

const allowedOrderTransitions: Record<StrictOrderState, StrictOrderState[]> = {
  cancelled: [],
  completed: ["refunded"],
  draft: ["pending_payment", "cancelled"],
  expired: [],
  failed: ["manual_review"],
  fulfilled: ["completed", "refunded"],
  fulfillment_pending: ["fulfilled", "manual_review"],
  manual_review: ["pending_payment", "cancelled", "refunded"],
  paid: ["fulfillment_pending", "manual_review", "refunded"],
  pending_payment: ["paid", "expired", "cancelled", "failed", "manual_review"],
  refunded: [],
};

export function canTransitionOrder(from: StrictOrderState, to: StrictOrderState) {
  return allowedOrderTransitions[from].includes(to);
}

export function assertOrderTransition(from: StrictOrderState, to: StrictOrderState) {
  if (!canTransitionOrder(from, to)) {
    throw new Error(`Invalid order transition: ${from} -> ${to}`);
  }
}

export const licenseStates = [
  "not_issued",
  "reserved",
  "issued",
  "expired_update",
  "revoked",
  "replaced",
  "refunded",
] as const;

export type LicenseState = (typeof licenseStates)[number];

export const downloadStates = [
  "locked",
  "available",
  "token_issued",
  "downloaded",
  "expired",
  "revoked",
] as const;

export type DownloadState = (typeof downloadStates)[number];
