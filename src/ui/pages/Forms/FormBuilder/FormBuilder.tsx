import React, { useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import useFormBuilderState from "../../../../hooks/logics/useFormBuilderState";
import Question from "../../../components/FormBuilder/Question";
import Group from "../../../components/FormBuilder/Group";
import { useState } from "react";
import Logo from "../../../../assets/icons/Logo.png";
import IconDeployement from "../../../../assets/icons/IconDeployement.svg";
import IconSupprimer from "../../../../assets/icons/IconSupprimer.svg";
import IconAjoutQuestion from "../../../../assets/icons/IconAjoutQuestion.svg";
import Settings from "../../../components/FormBuilder/Settings";
import {Question as QuestionType} from "../../../../data/interfaces/FormBuilderTypes";
import { UpdateFieldsDto, Field } from "../../../../data/dtos/update-fields.dto";
import { useParams } from "react-router-dom";
import { useFormId } from "../../../../hooks/forms";
import { updateFields } from "../../../../services/form";
import { useNavigate } from "react-router-dom";

const FormBuilder: React.FC = () => {
  const { id } = useParams();
  const { data: form } = useFormId(id as string);
  const navigate = useNavigate();

  const { questions, groups,initializeQuestionsFromDatabase, addQuestion, addGroup, moveQuestion, updateGroupName, updateQuestionTitle, updateQuestionIsSelected, removeSelectedQuestions, updateQuestion ,duplicateQuestion , removeQuestionById } =
    useFormBuilderState();

    useEffect(() => {
      if(!form) return;
      console.log("Form =>", form);
      const fields : Field[] = form.fields ;
      const questionsFromDatabase: QuestionType[] = fields.map((field: Field) => {
        return {
          id: field.name,
          title: field.title,
          groupId: null,
          isSelected: false,
          name: field.name,
          guidance: field.guidance,
          required: field.required,
          default: field.default,
          conditions: field.conditions.map((condition,index) => ({
            id: `${field.name}-${index}`,
            field: condition.field,
            comparator: condition.comparator,
            value: condition.value,
          })),
          validations: field.validations.map((validation,index) => ({
            id: `${field.name}-${index}`,
            message: validation.message,
            comparator: validation.comparator,
            value: validation.value,
          })),
        } as QuestionType;
      });
      console.log("Questions from database =>", questionsFromDatabase);
      initializeQuestionsFromDatabase(questionsFromDatabase);
    }, [form]);

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const [openedSettingQuestion, setOpenedSettingQuestion] = useState<QuestionType | null>(null);

  const handleOpenSettings = (questionId: string) => {
    const question = questions.find((question) => question.id === questionId);
    if (!question) return;

    setOpenedSettingQuestion(question);
    setIsSettingsOpen(true);
  };

  const save = async() => {
    console.log({ questions });
    const fields: Field[] = [];
    questions.forEach((question) => {
      fields.push({
        type: "text",
        name: question.name,
        title: question.title,
        required: question.required,
        default: question.default,
        guidance: question.guidance,
        conditions: question.conditions.map((condition) => ({
          field: condition.field,
          comparator: condition.comparator,
          value: condition.value,
        })),
        validations: question.validations.map((validation) => ({
          comparator: validation.comparator,
          value: validation.value,
          message: validation.message,
        })),
      });
    });
    console.log("Form Builder dto =>", fields);
    await updateFields(id as string, {fields});
    navigate("/forms");
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <main className="w-screen h-screen bg-gray-100">
        <Settings isOpen={isSettingsOpen} setIsOpen={setIsSettingsOpen} question={openedSettingQuestion} updateQuestion={updateQuestion} questions={questions} />
        <div className="flex flex-col bg-white pb-3 gap-7">
          {/* Header */}
          <div className="flex flex-row justify-between px-6 pt-6 items-center">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <img src={Logo} alt="logo" className="w-10 h-10" />
                <span className="font-semibold">TASKFORM</span>
              </div>
              <span className="text-sm">{form?.name}</span>
            </div>
            <button className="py-1 px-4 bg-gray-600 text-white rounded-sm text-xs items-start justify-center" onClick={save}>
              <span>Sauvegarder</span>
            </button>
          </div>

          {/* Icons in center */}
          <div className="flex flex-row items-center justify-center gap-1">
            <div>
              <button onClick={addQuestion}><img src={IconAjoutQuestion} alt="Preview" className="w-5 h-5" /></button>
            </div>
            <div>
              <button onClick={addGroup}><img src={IconDeployement} alt="Preview" className="w-5 h-5" /></button>
            </div>
            <div>
              <button onClick={removeSelectedQuestions}> <img src={IconSupprimer} alt="Preview" className="w-5 h-5" /></button>
            </div>
          </div>

        </div>

        {/* Questions and Groups */}
        <div className="flex flex-col items-center pt-4 gap-10">
          <div className="text-base font-semibold text-gray-700">
            {form?.header}
          </div>

          {/* Questions */}
          {questions.filter((question) => !question.groupId).map((question) => (
            <Question
              key={question.id}
              question={question}
              updateQuestionTitle={updateQuestionTitle}
              updateQuestionIsSelected={updateQuestionIsSelected}
              removeQuestionById={removeQuestionById}
              duplicateQuestion={duplicateQuestion}
              openSettings={handleOpenSettings}
            />
          ))}

          {/* Groups */}
          {groups.map((group) => (
            <Group
              key={group.id}
              group={group}
              moveQuestion={moveQuestion}
              updateGroupName={updateGroupName}
              updateQuestionTitle={updateQuestionTitle} // Pass the function here
              updateQuestionIsSelected={updateQuestionIsSelected} // Pass the function here
              removeQuestionById={removeQuestionById} // Pass the function here
              duplicateQuestion={duplicateQuestion} // Pass the function here
              openSettings={handleOpenSettings}
            />
          ))}
        </div>
      </main>
    </DndProvider>
  );
};

export default FormBuilder;
