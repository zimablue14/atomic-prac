import styled from 'styled-components';

import type theme from '../../../styles/defaultTheme';

type PaletteKey = keyof typeof theme.palette;

type BlockProps = {
  palette?: PaletteKey;
  $$reverse?: boolean;
  $opaque?: boolean;
};

/**
 * 텍스트와 배경 색상을 theme 기반으로 설정할 수 있는 기본 블록 요소입니다.
 *
 * 이 컴포넌트는 다양한 레이아웃 요소(예: Wrapper)의 기반으로 활용됩니다.
 *
 * @property {PaletteKey} [palette] - 사용할 색상 팔레트 키
 * @property {boolean} [$$reverse] - (현재 미사용) 스타일 반전을 위한 예약 속성
 * @property {boolean} [$opaque] - 배경을 불투명하게 만들지 여부 (true일 경우 `theme.palette[p][0]` 배경 사용)
 */
const Block = styled.div<BlockProps>`
  font-family: ${({ theme }) => theme.fonts.primary};
  background-color: ${({ theme, $opaque = false, palette: p = 'grayscale' }) =>
    $opaque ? theme.palette[p][0] : 'transparent'};
  color: ${({ theme, palette: p = 'grayscale' }) => theme.palette[p][1]};
`;

export default Block;
