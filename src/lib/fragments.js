import { graphql } from 'gatsby';

export const bannerImage = graphql`
  fragment bannerImage260 on File {
    childImageSharp {
      fluid(maxWidth: 260, maxHeight: 180, traceSVG: { color: "#573ede" }) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
  fragment bannerImage400 on File {
    childImageSharp {
      fluid(maxWidth: 400, traceSVG: { color: "#573ede" }) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
  fragment bannerImage620 on File {
    childImageSharp {
      fluid(
        maxWidth: 620
        maxHeight: 350
        traceSVG: { color: "#573ede" }
        quality: 75
      ) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
  fragment bannerImage720 on File {
    childImageSharp {
      fluid(maxWidth: 720, traceSVG: { color: "#573ede" }, quality: 75) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
  fragment cardFields on MarkdownRemark {
    fields {
      author
      date(formatString: "MMMM Do, YYYY")
      dateHe: date(formatString: "MMMM Do, YYYY", locale: "he-IL")
      language
      keywords
      slug
      title
    }
  }
  fragment bannerField400 on MarkdownRemark {
    bannerField: fields {
      banner {
        ...bannerImage400
      }
    }
  }
  fragment articleBanner on MarkdownRemark {
    bannerField: fields {
      banner {
        ...bannerImage620
      }
    }
  }
`;
