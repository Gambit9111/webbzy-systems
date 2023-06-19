import { GetServerSideProps } from "next";
import axios from "axios";
import { useEffect } from "react";
import questions, { Question } from "@/components/questionnaireForm/Questions";

import ContainerWrapper from "@/components/layout/ContainerWrapper";

type QuestionnaireData = {
  [key: string]: string | undefined;
};

type QuestionnairePageProps = {
  questionnaireData: QuestionnaireData;
};

const QuestionnairePage: React.FC<QuestionnairePageProps> = ({
  questionnaireData,
}) => {
  const questionAnswerPairs: {
    question?: Question;
    answer?: string | undefined;
    isSection?: boolean;
  }[] = questions.map((item) => {
    if (item.section) {
      return {
        isSection: true,
        question: item,
      };
    }
    return {
      question: item,
      answer: questionnaireData[item.id],
    };
  });

  // Use the questionnaireData to render the page
  useEffect(() => {
    console.log(questionnaireData);
  }, []);

  return (
    <ContainerWrapper>
      <p className="text-gray-600">
        Filled
      </p>
      {questionAnswerPairs.map((pair, index) => (
        <div key={pair.question?.id || `section-${index}`} className="w-full">
          {pair.isSection ? (
            <div className="relative bg-gray-200">
              <h2 className="mt-6 text-2xl font-bold">
                {pair.question?.label}
              </h2>
              <div className="absolute right-0 top-0 h-[2px] w-screen bg-black" />
            </div>
          ) : (
            <>
              <h4>{pair.question?.label}</h4>
              <textarea
                className="mt-4 w-full border border-gray-300 p-2"
                rows={5}
                value={pair.answer || ""}
                readOnly
              />
            </>
          )}
        </div>
      ))}
    </ContainerWrapper>
  );
};

export const getServerSideProps: GetServerSideProps<
  QuestionnairePageProps
> = async (context) => {
  // @ts-ignore
  const { id } = context.params;
  const apiUrl = `https://webbzy-systems.vercel.app/api/questionnaire/${id}`;

  try {
    const response = await axios.get(apiUrl);
    const questionnaireData = response.data.data;
    return {
      props: {
        questionnaireData,
      },
    };
  } catch (error) {
    console.error("Error fetching questionnaire data:", error);
    return {
      notFound: true,
    };
  }
};

export default QuestionnairePage;
