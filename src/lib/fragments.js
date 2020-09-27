import { graphql } from 'gatsby';

export const bannerImage = graphql`
  fragment bannerImage400 on File {
    childImageSharp {
      fluid(maxWidth: 400, traceSVG: { color: "#573ede" }) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
  fragment bannerImage640 on File {
    childImageSharp {
      fluid(maxWidth: 640, traceSVG: { color: "#573ede" }) {
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
      subtitle
      summery
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
  fragment bannerField720 on MarkdownRemark {
    bannerField: fields {
      banner {
        ...bannerImage720
      }
    }
  }
`;
