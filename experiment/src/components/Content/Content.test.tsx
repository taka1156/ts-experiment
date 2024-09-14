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

describe('textareaテスト', () => {
  afterEach(() => {
    cleanup();
  });

  it('スナップショット', () => {
    const args: React.ComponentPropsWithRef<'textarea'> = {
      defaultValue: 'test'
    };
    const { dom } = setup(<Content {...args} />);

    expect(dom).toMatchSnapshot();
  });

  it('input', async () => {
    const { user, dom } = setup(<Content />);

    const input = screen.getByTestId<HTMLTextAreaElement>('inputTarget');

    const testInputValue = 'テスト入力';
    await user.clear(input);
    await user.type(input, testInputValue);

    expect(input.value).toBe(testInputValue);

    expect(dom).toMatchSnapshot();
  });

  it('バリデーション', async () => {
    const { user, dom } = setup(<Content />);

    const input = screen.getByTestId<HTMLTextAreaElement>('inputTarget');

    await user.clear(input);
    await user.tab(); // = onBlur

    const error = screen.getByTestId<HTMLParagraphElement>('errorTarget');

    expect(error.textContent).toBe('必須入力です');

    expect(dom).toMatchSnapshot();
  });
});
