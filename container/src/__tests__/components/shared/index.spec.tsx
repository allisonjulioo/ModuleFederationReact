import * as Components from 'components/shared/';

describe('Component Exports', () => {
  it('should export Anchor', () => {
    expect(Components.Anchor).toBeDefined();
  });

  it('should export Button', () => {
    expect(Components.Button).toBeDefined();
  });

  it('should export ButtonAddCard', () => {
    expect(Components.ButtonAddCard).toBeDefined();
  });

  it('should export Card', () => {
    expect(Components.Card).toBeDefined();
  });

  it('should export EmptyState', () => {
    expect(Components.EmptyState).toBeDefined();
  });
});
