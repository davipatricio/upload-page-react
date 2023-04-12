import "styled-components";

interface IconOptions {
  iconBg: string;
  iconColor: string;
  progressColor: string;
  progressText: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    uploading: IconOptions;
    done: IconOptions;
    error: IconOptions;
  }
}
