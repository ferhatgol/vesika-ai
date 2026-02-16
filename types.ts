export enum AppState {
  IDLE = 'IDLE',
  PREVIEW = 'PREVIEW',
  PROCESSING = 'PROCESSING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface ProcessedResult {
  originalImage: string;
  processedImage: string;
}

export interface ProcessingOptions {
  lighting: boolean;
  background: 'white' | 'grey';
}
