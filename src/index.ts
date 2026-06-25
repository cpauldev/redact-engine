export {
  createConsoleBridge,
  createLogger,
  createRedactor,
  defaultRedactionPreset,
  redactString,
  redactValue,
  stripeRedactionPreset,
} from "./redact-log";

export type {
  ConsoleLike,
  LogLevel,
  Logger,
  LoggerOptions,
  RedactionPreset,
  Redactor,
  RedactorOptions,
  ReplacementRule,
} from "./types";
