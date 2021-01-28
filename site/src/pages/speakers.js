import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { useStaticQuery } from "gatsby";
import SpeakerCard from "../components/speakerCards";

const Speaker = ({ speakers }) => (
  <div className="text-center">
    <h2 className="text-5xl font-extrabold text-blue-500 leading-9 tracking-tight font-inter p-4">
      Speakers
    </h2>
    <SpeakerCard speakers={speakers} />;
  </div>
);

export default function SpeakerPage() {
  const data = useStaticQuery(graphql`
    query FetchSpeakerData {
      allSpeakersYaml {
        edges {
          node {
            id
            avatar
            name
            title
            time
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title="Speakers" keywords={[`Speakers`]} />
      <Speaker speakers={data.allSpeakersYaml.edges} />
    </Layout>
  );
}
