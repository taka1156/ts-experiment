import { ReactElement } from 'react';
import { describe, expect, it, afterEach } from 'vitest';
import userEvent from '@testing-library/user-event';
import {
  cleanup,
  render,
  renderHook,
  screen,
  waitFor
} from '@testing-library/react';
import { RHFContent } from './RHFContent';
import { useRHFFormState } from '.';

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
    const { result } = renderHook(() => useRHFFormState());

    const { dom } = setup(<RHFContent {...result.current} />);

    expect(dom).toMatchSnapshot();
  });

  it('input', async () => {
    const { result } = renderHook(() => useRHFFormState());

    const { user, dom } = setup(<RHFContent {...result.current} />);

    const input = screen.getByTestId<HTMLTextAreaElement>('inputTarget');

    const testInputValue = 'テスト入力';
    await user.clear(input);
    await user.type(input, testInputValue);

    expect(input.value).toBe(testInputValue);

    expect(dom).toMatchSnapshot();
  });

  it('バリデーション', async () => {
    const { result } = renderHook(() => useRHFFormState());

    const { user, dom } = setup(<RHFContent {...result.current} />);

    const input = screen.getByTestId<HTMLTextAreaElement>('inputTarget');

    await user.clear(input);
    await user.tab(); // = onBlur

    dom.rerender(<RHFContent {...result.current} />); // 再レンダリング追加

    waitFor(() => {
      const error = screen.getByTestId<HTMLParagraphElement>('errorTarget');

      expect(error.textContent).toBe('必須入力です。');
      expect(dom).toMatchSnapshot();
    });
  });
});
