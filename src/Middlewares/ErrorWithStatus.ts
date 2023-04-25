export default class ErrorWithStatus extends Error {
  public status: number;
  
  constructor(description: string, status: number) {
    super(description);
    this.status = status;
  }
}