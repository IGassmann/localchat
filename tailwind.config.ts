import type { Config } from "tailwindcss";
// @ts-expect-error - See https://github.com/nativewind/nativewind/issues/1330
import NativewindPreset from "nativewind/preset";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [NativewindPreset],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
