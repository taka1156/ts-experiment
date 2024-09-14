import { ReactElement } from 'react';
import { describe, expect, it, afterEach } from 'vitest';
import userEvent from '@testing-library/user-event';
import { cleanup, render, screen } from '@testing-library/react';
import { Content } from './Content';

const setup = (jsx: ReactElement) => {
  return {
    user: userEvent.setup(),
    dom: render(jsx)
  };
};

describe('textareaインプットテスト', () => {
  afterEach(() => {
    cleanup();
  });

  it('input', async () => {
    const { user } = setup(<Content />);

    const input = await screen.findByTestId<HTMLTextAreaElement>('inputTarget');

    const testInputValue = 'テスト入力';
    await user.clear(input);
    await user.type(input, testInputValue);

    expect(input.value).toBe(testInputValue);
  });
});
