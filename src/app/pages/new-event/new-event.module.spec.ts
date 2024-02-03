import { NewEventModule } from './new-event.module';

describe('NewEventModule', () => {
  const module: NewEventModule = new NewEventModule();

  it('should create', () => {
    expect(module).toBeTruthy();
  });
});
