import { is } from "drizzle-orm";
import React, { useState } from "react";

const Publications = () => {
  const publications = [
    {
      title:
        "On the Use of Unsupervised Machine Learning for Classification of Crowd-Based Software Requirements",
      type: "Research Paper",
      platform: "Journal of Systems & Software, Elsevier",
      date: "Oct 2025",
      description:
        "Crowd-based requirements engineering (CrowdRE) involves large-scale user participation to gather software requirements. Supervised machine learning (SML) is commonly used to classify these requirements but demands significant time, computational resources, and high-quality labeled data, which are scarce in CrowdRE. The objective of this paper is to investigate the potential of clustering-based unsupervised ML to classify crowd-based requirements. Our framework evaluates sentence embedding models which convert textual requirements into numerical vectors, selecting optimal ones using information retrieval (IR) measures. These vectors are grouped via clustering algorithms, followed by manual or automated label assignment. Automated labeling involves generating a class-specific corpus for every class and computing semantic similarity to assign labels, while manual labeling is supported by topic modeling which uncovers thematic structures within every cluster. We validated the framework on 3000 crowd-generated smart home requirements, tackling binary, tertiary, quaternary, and quinary classification tasks. Automated labeling achieved F1 scores of up to ~90%, ~82%, ~70%, and ~52%, respectively, with manual labeling showing similar performance. Compared to logistic regression which is a supervised ML model, our framework occasionally outperformed it in F1 scores. Against Llama-3.2-3B-Instruct, which is a state-of-the-art lightweight large language model (LLM), it surpassed performance in 38% of automated and 35% of manual labeling cases. We also show that our framework enables one to analyze and identify labeling-related issues in the dataset, enhancing ground-truth data quality. These findings show that computationally efficient unsupervised methods effectively classify software requirements in data-scarce CrowdRE settings, offering a viable alternative to supervised approaches.",
      link: "",
      isNew: true,
      tags: [
        // "Unsupervised Machine Learning",
        // "Natural Language Processing",
        // "Topic Modeling",
        // "Transformers",
        // "Requirements Engineering",
        // "Clustering",
        // "Research",
      ],
    },
    {
      title:
        "Classification of Crowd-Based Software Requirements via Unsupervised Learning",
      type: "Research Paper",
      platform:
        "Quality of Information and Communications Technology (QUATIC) 2024",
      date: "Sep 2024",
      description:
        "Crowd-based requirements engineering (CrowdRE) involves large scale user participation in RE related tasks. In order to extract meaningful insights, supervised machine learning techniques (SML) have been used in the literature for the classification of crowd-based software requirements. These techniques involve training ML models which requires a lot of time, computational resources and high quality labeled data which is extremely rare to obtain in the context of CrowdRE. We focus on the problem of classifying crowd-based software requirements using unsupervised ML techniques. Our approach involves generating sentence embeddings, evaluating them using information retrieval (IR) measures and applying clustering algorithms on the best performing sentence embeddings. In the last step, we apply topic modeling using BERTopic followed by the manual labeling of clusters. We also provide the option of automated labeling of these clusters using the idea of semantic similarity. We have applied our approach to a large-sized dataset with around 3000 crowd-generated requirements for smart home applications. We have experimented with both binary and multi-class classification problems, e.g., tertiary, quaternary and quinary classification. Our experimental results demonstrate that this approach can be very useful for the classification of crowd-based software requirements in the absence of labeled data. Additionally, our approach can also be used to analyse and identify labeling related issues in the dataset which may be useful for improving the quality of existing ground truth data.",
      link: "https://link.springer.com/chapter/10.1007/978-3-031-70245-7_17",
      isNew: false,
      tags: [
        "Unsupervised Machine Learning",
        "Natural Language Processing",
        "Topic Modeling",
        "Transformers",
        "Requirements Engineering",
        // "Clustering",
        // "Research",
      ],
    },
    {
      title:
        "Generation and De-Identification of Indian Clinical Discharge Summaries using LLMs",
      type: "Research Paper",
      platform:
        "BioNLP Workshop, Association for Computational Linguistics (ACL) 2024",
      date: "Aug 2024",
      description:
        "The consequences of a healthcare data breach can be devastating for the patients, providers, and payers. The average financial impact of a data breach in recent months has been estimated to be close to USD 10 million. This is especially significant for healthcare organizations in India that are managing rapid digitization while still establishing data governance procedures that align with the letter and spirit of the law. Computer-based systems for de-identification of personal information are vulnerable to data drift, often rendering them ineffective in cross-institution settings. Therefore, a rigorous assessment of existing de-identification against local health datasets is imperative to support the safe adoption of digital health initiatives in India. Using a small set of de-identified patient discharge summaries provided by an Indian healthcare institution, in this paper, we report the nominal performance of de-identification algorithms (based on language models) trained on publicly available non-Indian datasets, pointing towards a lack of cross-institutional generalization. Similarly, experimentation with off-the-shelf de-identification systems reveals potential risks associated with the approach. To overcome data scarcity, we explore generating synthetic clinical reports (using publicly available and Indian summaries) by performing in-context learning over Large Language Models (LLMs). Our experiments demonstrate the use of generated reports as an effective strategy for creating high-performing de-identification systems with good generalization capabilities.",
      link: "https://aclanthology.org/2024.bionlp-1.26/",
      isNew: false,
      tags: [
        "Natural Language Processing",
        "Large Language Models",
        "Healthcare AI",
        "Data Privacy",
        "Named Entity Recognition",
        "Synthetic Data Generation",
        "Model Fine-tuning",
      ],
    },
  ];

  const getTypeIcon = (type: string) => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
      <path
        fillRule="evenodd"
        d="M3 8a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <section id="publications" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Publications & Articles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My thoughts and insights shared with the developer community
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid gap-8">
          {publications.map((pub, index) => {
            const [expanded, setExpanded] = useState(false);

            return (
              <div
                key={index}
                className="bg-card border border-card-border rounded-2xl p-6 hover-elevate group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    {getTypeIcon(pub.type)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <div className="flex items-center gap-3 mb-2 sm:mb-0">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                          {pub.type}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {pub.platform}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {pub.date}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {pub.title}

                      {pub.isNew && (
                        <span className="ml-3 inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg shadow-primary/50 border border-primary/30 hover:shadow-primary/70 hover:scale-105 transition-all duration-200">
                          Accepted
                        </span>
                      )}
                      {/* {pub.isNew && (
                        <span className="ml-3 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                          New
                        </span>
                      )} */}
                    </h3>

                    {/* Description with truncation */}
                    <p
                      className={`text-muted-foreground mb-4 leading-relaxed transition-all ${
                        expanded ? "" : "line-clamp-3"
                      }`}
                    >
                      {pub.description}
                    </p>

                    {pub.description.length > 200 && (
                      <button
                        className="text-primary font-medium hover:underline mb-4"
                        onClick={() => setExpanded(!expanded)}
                      >
                        {expanded ? "Show less" : "Read more"}
                      </button>
                    )}

                    <div className="flex flex-wrap gap-2 mb-4">
                      {pub.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors duration-200"
                    >
                      Visit Publication
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Publications;
