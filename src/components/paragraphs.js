import { css } from '@emotion/core';

/**
 *   treat 2 line breaks as paragraph delimiter, and single line break just as <br>
 *   for 2 line breaks set margin top & bottom according to props
 *   for single line breaks set margin top & bottom to 0 *
 *
 */

const getParagraphs = text => {
  const sections = text.split('\n\n').map(section => {
    const parts = section
      .split('\n')
      .filter(p => p)
      .map(p => ({ text: p }));
    parts[0].start = true;
    parts[parts.length - 1].end = true;
    return parts;
  });
  return sections.flat();
};

const ParagraphGroup = ({
  className,
  summery,
  margin = { top: 0, bottom: 0 },
}) => {
  if (!summery) {
    return null;
  }

  const parts = getParagraphs(summery);
  const paragraphs = parts.map((p, i) => (
    <p
      className={parts.length === 1 ? className : null}
      key={i}
      css={css`
        margin-top: ${p.start ? margin.top : 0};
        margin-bottom: ${p.end ? margin.bottom : 0};
      `}
    >
      {p.text}
    </p>
  ));

  return paragraphs.length === 1 ? (
    paragraphs[0]
  ) : (
    <div className={className}>{paragraphs}</div>
  );
};

export default ParagraphGroup;
