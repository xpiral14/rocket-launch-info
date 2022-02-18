export default abstract class Provider {
  abstract boot(): void | Promise<void>;
}
