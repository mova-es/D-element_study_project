import { setupWorker } from "msw"
import { handlers } from "../../app/api/handlers.js"

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers)


