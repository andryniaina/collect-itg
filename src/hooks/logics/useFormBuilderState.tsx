import { useState } from "react";
import { FormBuilderState, Group, Question, UseFormBuilderState } from "../../data/interfaces/FormBuilderTypes";

const useFormBuilderState = (): UseFormBuilderState => {
    const DEFAULT_GROUP_ID = "default-group";
  
    const [state, setState] = useState<FormBuilderState>({
      questions: [
        { id: "q1", title: "Nouvelle question", groupId: null, isSelected: false, name: "Nouvelle question", guidance: "", required: false, default: "", conditions: [], validations: [] }, // Default group is represented as null
      ],
      groups: [
        {
          id: DEFAULT_GROUP_ID,
          name: "Default Group",
          questions: [
            { id: "q1", title: "Nouvelle question", groupId: null, isSelected: false, name: "Nouvelle question", guidance: "", required: false, default: "", conditions: [], validations: [] },
          ], // Default group starts with the first question
        },
      ],
    });

    const initializeQuestionsFromDatabase = (questions: Question[]) => {
      if(questions.length === 0) return;
      setState({
          questions: questions,
          groups: [
            {
              id: DEFAULT_GROUP_ID,
              name: "Default Group",
              questions: questions,
            },
          ],
        });
    };
  
    const addQuestion = () => {
      setState((prev) => {
        const newQuestion: Question = {
          id: `q${prev.questions.length + 1}`,
          title: "Nouvelle question",
          groupId: null, // New question is in the Default Group
          isSelected: false,
          name: "Nouvelle question",
          guidance: "",
          required: false,  
          default: "",
          conditions: [],
          validations: [],
        };
  
        return {
          ...prev,
          questions: [...prev.questions, newQuestion],
          groups: prev.groups.map((group) =>
            group.id === DEFAULT_GROUP_ID
              ? { ...group, questions: [...group.questions, newQuestion] }
              : group
          ),
        };
      });
    };
  
    const addGroup = () => {
      setState((prev) => ({
        ...prev,
        groups: [
          ...prev.groups,
          {
            id: `g${prev.groups.length + 1}`,
            name: `Group ${prev.groups.length}`,
            questions: [],
          },
        ],
      }));
    };
  
    const moveQuestion = (questionId: string, targetGroupId: string | null) => {
        setState((prev) => {
          const questionToMove = prev.questions.find((q) => q.id === questionId);
          if (!questionToMove) return prev;
      
          const updatedQuestions = prev.questions.map((q) =>
            q.id === questionId ? { ...q, groupId: targetGroupId } : q
          );
      
          const updatedGroups = prev.groups.map((group) => {
            // Remove the question from its current group
            if (group.questions.some((q) => q.id === questionId)) {
              return {
                ...group,
                questions: group.questions.filter((q) => q.id !== questionId),
              };
            }
            // Add the question to the target group (if not null)
            if (group.id === targetGroupId) {
              return {
                ...group,
                questions: [...group.questions, { ...questionToMove, groupId: targetGroupId }],
              };
            }
            return group;
          });
      
          // If targetGroupId is null, question is in the default group (not visually represented)
          return {
            ...prev,
            questions: updatedQuestions,
            groups: updatedGroups,
          };
        });
      };

    const updateGroupName = (groupId: string, newName: string) => {
        setState((prev) => ({
          ...prev,
          groups: prev.groups.map((group) =>
            group.id === groupId ? { ...group, name: newName } : group
          ),
        }));
      };
    
      const updateQuestionTitle = (questionId: string, newTitle: string) => {
        setState((prev) => ({
          ...prev,
          questions: prev.questions.map((question) =>
            question.id === questionId ? { ...question, title: newTitle } : question
          ),
          groups: prev.groups.map((group) => ({
            ...group,
            questions: group.questions.map((question) =>
              question.id === questionId ? { ...question, title: newTitle } : question
            ),
          })),
        }));
      };

      const updateQuestionIsSelected = (questionId: string, isSelected: boolean) => {
        setState((prev) => ({
          ...prev,
          questions: prev.questions.map((question) =>
            question.id === questionId ? { ...question, isSelected } : question
          ),
          groups: prev.groups.map((group) => ({
            ...group,
            questions: group.questions.map((question) =>
              question.id === questionId ? { ...question, isSelected } : question
            ),
          })),
        }));
      };

      const removeSelectedQuestions = () => {
        setState((prev) => ({
          ...prev,
          questions: prev.questions.filter((question) => !question.isSelected),
          groups: prev.groups.map((group) => ({
            ...group,
            questions: group.questions.filter((question) => !question.isSelected),
          })),
        }));
      };

      const removeQuestionById = (questionId: string) => {
        setState((prev) => ({
          ...prev,
          questions: prev.questions.filter((question) => question.id !== questionId),
          groups: prev.groups.map((group) => ({
            ...group,
            questions: group.questions.filter((question) => question.id !== questionId),
          })),
        }));
      };
    
      const duplicateQuestion = (questionId: string) => {
        const newQuestionId = `q${state.questions.length + 1}`;
        const newQuestion = { ...state.questions.find((question) => question.id === questionId)!, id: newQuestionId };
        setState((prev) => ({
          ...prev,
          questions: [...prev.questions, newQuestion],
          groups: prev.groups.map((group) => ({
            ...group,
            questions: [...group.questions, newQuestion],
          })),
        }));
      };

      const updateQuestion = async (questionId: string, data: any) => {
        const questionToUpdate = state.questions.find((question) => question.id === questionId);
        if (!questionToUpdate) return;

        const updatedQuestion = { ...questionToUpdate, ...data };

        setState((prev) => ({
          ...prev,
          questions: prev.questions.map((question) =>
            question.id === questionId ? updatedQuestion : question
          ),
          groups: prev.groups.map((group) => ({
            ...group,
            questions: group.questions.map((question) =>
              question.id === questionId ? updatedQuestion : question
            ),
          })),
        }));
      };
  
    return {
      questions: state.questions,
      groups: state.groups.filter((group) => group.id !== DEFAULT_GROUP_ID), // Hide Default Group in UI
      addQuestion,
      addGroup,
      moveQuestion,
      updateGroupName,
      updateQuestionTitle,
      updateQuestionIsSelected,
      removeSelectedQuestions,
      removeQuestionById,
      duplicateQuestion,
      updateQuestion,
      initializeQuestionsFromDatabase
    };
  };
  
  export default useFormBuilderState;
  