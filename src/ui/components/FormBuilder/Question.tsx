import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { Question as QuestionType } from "../../../data/interfaces/FormBuilderTypes";
import IconDuplicate from "../../../assets/icons/IconeDuplicate.svg";
import IconParams from "../../../assets/icons/IconeParams.svg";
import IconSupprimer from "../../../assets/icons/IconSupprimer.svg";

interface QuestionProps {
    question: QuestionType;
    updateQuestionTitle: (questionId: string, newTitle: string) => void;
    updateQuestionIsSelected: (questionId: string, isSelected: boolean) => void;
    removeQuestionById: (questionId: string) => void;
    duplicateQuestion: (questionId: string) => void;
    openSettings: (questionId: string) => void;
}

const Question: React.FC<QuestionProps> = ({ question, updateQuestionTitle, updateQuestionIsSelected, removeQuestionById, duplicateQuestion, openSettings }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "QUESTION",
        item: { id: question.id },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(question.title);

    const handleBlur = () => {
        setIsEditing(false);
        updateQuestionTitle(question.id, title);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            setIsEditing(false);
            updateQuestionTitle(question.id, title);
        }
    };

    return (
        <div
            ref={drag}
            className={`flex flex-row items-center gap-2 ${isDragging ? "opacity-50" : ""
                }`}
        >
            <input type="checkbox" className="w-4 h-4 border-gray-400 rounded-sm" checked={question.isSelected} onChange={(e) => updateQuestionIsSelected(question.id, e.target.checked)} />
            <div className="flex flex-row w-[500px] h-[75px] border-2 border-gray-300 rounded-sm bg-gray-100 relative">
                <div className="flex items-center justify-center absolute top-[-25px] right-0 gap-1">
                <button onClick={() => openSettings(question.id)}>
                    <img src={IconParams} alt="Params" className="w-5 h-5" />
                </button>
                <button onClick={() => duplicateQuestion(question.id)}>
                    <img src={IconDuplicate} alt="Duplicate" className="w-5 h-5" />
                </button>
                <button onClick={() => removeQuestionById(question.id)}>
                    <img src={IconSupprimer} alt="Supprimer" className="w-5 h-5" />
                </button>

                </div>
                <div className="w-1/12 border-r-2 border-gray-300 flex items-center justify-center text-xs text-gray-600">
                    abc
                </div>
                <div className="flex flex-col justify-between py-2 px-1">
                    {isEditing ? (
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            onBlur={handleBlur}
                            onKeyDown={handleKeyDown}
                            className="border rounded px-2 py-1"
                            autoFocus
                        />
                    ) : (
                        <span onClick={() => setIsEditing(true)} className="cursor-pointer">
                            {question.title}
                        </span>
                    )}
                    <span className="text-gray-400 text-xs">{question?.guidance === "" ? "Aucun indice" : question.guidance}</span>
                </div>
            </div>
        </div>
    );
};

export default Question;
