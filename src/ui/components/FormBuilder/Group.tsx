import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { Group as GroupType, Question as QuestionType } from "../../../data/interfaces/FormBuilderTypes";
import Question from "./Question";

interface GroupProps {
  group: GroupType;
  moveQuestion: (questionId: string, groupId: string) => void;
  updateGroupName: (groupId: string, newName: string) => void;
  updateQuestionTitle: (questionId: string, newTitle: string) => void; // Add this prop
  updateQuestionIsSelected: (questionId: string, isSelected: boolean) => void;
  removeQuestionById: (questionId: string) => void;
  duplicateQuestion: (questionId: string) => void;
  openSettings: (questionId: string) => void;
}

const Group: React.FC<GroupProps> = ({ group, moveQuestion, updateGroupName, updateQuestionTitle, updateQuestionIsSelected, removeQuestionById, duplicateQuestion , openSettings }) => {
  const [, drop] = useDrop(() => ({
    accept: "QUESTION",
    drop: (item: { id: string }) => moveQuestion(item.id, group.id),
  }));

  const [isEditing, setIsEditing] = useState(false);
  const [groupName, setGroupName] = useState(group.name);

  const handleBlur = () => {
    setIsEditing(false);
    updateGroupName(group.id, groupName);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      setIsEditing(false);
      updateGroupName(group.id, groupName);
    }
  };

  return (
    <div
      ref={drop}
      className="flex flex-col w-[500px] min-h-[75px] border-2 border-gray-400 bg-gray-200 rounded-md p-4 gap-3"
    >
      <div className="flex flex-row items-center gap-3">
        {isEditing ? (
          <input
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            className="border rounded px-2 py-1"
            autoFocus
          />
        ) : (
          <span onClick={() => setIsEditing(true)} className="cursor-pointer">
            {group.name}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-7">
        {group.questions.map((question: QuestionType) => (
          <Question
            key={question.id}
            question={question}
            updateQuestionTitle={updateQuestionTitle} // Pass the prop here
            updateQuestionIsSelected={updateQuestionIsSelected} // Pass the prop here
            removeQuestionById={removeQuestionById} // Pass the prop here
            duplicateQuestion={duplicateQuestion} // Pass the prop here
            openSettings={openSettings} // Pass the prop here
          />
        ))}
      </div>
    </div>
  );
};

export default Group;
