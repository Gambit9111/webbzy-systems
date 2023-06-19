import { useState } from "react";
import { useRouter } from "next/router";
import ContainerWrapper from "@/components/layout/ContainerWrapper";
import FormParent from "@/components/questionnaireForm/FormParent";
import questions from "@/components/questionnaireForm/Questions";
import axios from "axios";
import { type FormData } from "@/components/questionnaireForm/FormParent";

export default function Page() {
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const handleFormSubmit = async (formData: FormData) => {
    setSubmitting(true);

    try {
      const response = await axios.post("/api/questionnaire/submit", formData);

      console.log("Questionnaire saved to the database");
      // Perform any additional actions upon successful submission

      // Redirect the user to the questionnaire page with the generated ID
      router.push(`/clients/questionnaire/${response.data.id}`);
    } catch (error) {
      console.error("An error occurred while saving the questionnaire:", error);
      // Handle the error condition
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <ContainerWrapper>
        <div className="text-center flex flex-col gap-3">
          <h1 className="text-3xl font-bold uppercase">
            Webbzy Questionnaire
          </h1>
          <p className="text-sm text-gray-600">
            Fill out this questionnaire to help us accelerate the development of
            your website
          </p>
        </div>
        <FormParent
          questions={questions}
          onSubmit={handleFormSubmit}
          submitting={submitting}
        />
      </ContainerWrapper>
    </>
  );
}
