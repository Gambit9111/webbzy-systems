import { useState, ChangeEvent, FormEvent } from "react";
import Label from "./Label";
import TextArea from "./TextArea";
import { type Question } from "./Questions";
import React from "react";

export type FormData = {
  [key: string]: string | undefined;
};

type FormProps = {
  questions: Question[];
  onSubmit: (formData: FormData) => void;
  submitting: boolean;
};

const FormParent: React.FC<FormProps> = ({
  questions,
  onSubmit,
  submitting,
}) => {
  const [formData, setFormData] = useState<FormData>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const questionnaireData = {
      businessInfo1: formData["businessInfo1"],
      businessInfo2: formData["businessInfo2"],
      businessInfo3: formData["businessInfo3"],
      businessInfo4: formData["businessInfo4"],
      websiteObjectives1: formData["websiteObjectives1"],
      websiteObjectives2: formData["websiteObjectives2"],
      domainInfo1: formData["domainInfo1"],
      domainInfo2: formData["domainInfo2"],
      domainInfo3: formData["domainInfo3"],
      domainInfo4: formData["domainInfo4"],
      domainInfo5: formData["domainInfo5"],
      domainInfo6: formData["domainInfo6"],
      domainInfo7: formData["domainInfo7"],
      domainInfo8: formData["domainInfo8"],
      designAndBranding1: formData["designAndBranding1"],
      designAndBranding2: formData["designAndBranding2"],
      designAndBranding3: formData["designAndBranding3"],
      designAndBranding4: formData["designAndBranding4"],
      content1: formData["content1"],
      content2: formData["content2"],
      content3: formData["content3"],
      content4: formData["content4"],
      content5: formData["content5"],
      functionality1: formData["functionality1"],
      functionality2: formData["functionality2"],
      functionality3: formData["functionality3"],
      competitors1: formData["competitors1"],
      competitors2: formData["competitors2"],
      timeline1: formData["timeline1"],
      timeline2: formData["timeline2"],
      cta1: formData["cta1"],
      cta2: formData["cta2"],
      seo1: formData["seo1"],
      seo2: formData["seo2"],
      seo3: formData["seo3"],
      seo4: formData["seo4"],
      analytics1: formData["analytics1"],
      analytics2: formData["analytics2"],
      analytics3: formData["analytics3"],
      analytics4: formData["analytics4"],
      cms1: formData["cms1"],
      cms2: formData["cms2"],
      maintenance1: formData["maintenance1"],
      maintenance2: formData["maintenance2"],
      targetedLocations1: formData["targetedLocations1"],
      targetedLocations2: formData["targetedLocations2"],
      socialMedia1: formData["socialMedia1"],
      testimonials1: formData["testimonials1"],
      testimonials2: formData["testimonials2"],
      contentUpdates1: formData["contentUpdates1"],
      contentUpdates2: formData["contentUpdates2"],
      contentUpdates3: formData["contentUpdates3"],
      clientInvolvement1: formData["clientInvolvement1"],
    };
    onSubmit(questionnaireData);
    setFormData({});
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 xl:gap-12 xl:text-lg"
    >
      {questions.map((question) => (
        <React.Fragment key={question.id}>
          {question.section ? (
            <div className="bg-gray-200 relative">
              <h2 className="mt-6 text-2xl font-bold">{question.label}</h2>
              <div className="w-screen absolute top-0 right-0 bg-black h-[2px]" />
            </div>
          ) : (
            <Label htmlFor={question.id} labelText={question.label}>
              <TextArea
                id={question.id}
                name={question.id}
                value={formData[question.id] || ""}
                onChange={handleChange}
                disabled={submitting} // Disable textarea when submitting
              />
            </Label>
          )}
        </React.Fragment>
      ))}
      {/* Add more textarea inputs as needed */}
      <button
        type="submit"
        className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
        disabled={submitting}
      >
        {submitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default FormParent;
