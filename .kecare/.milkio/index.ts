// index
import type { MilkioMeta, MilkioContext, MilkioRejectCode, MilkioEvents } from "./declares.ts";
import typiaSchema from "./typia-schema.ts";
import routeSchema from "./route-schema.ts";
import handlerSchema from "./handler-schema.ts";


export const generated = {
  meta: undefined as unknown as MilkioMeta,
  context: undefined as unknown as MilkioContext,
  rejectCode: undefined as unknown as MilkioRejectCode,
  events: undefined as unknown as MilkioEvents,
  typiaSchema,
  routeSchema,
  handlerSchema,
};
