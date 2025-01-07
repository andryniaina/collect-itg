export interface Question {
    id: string;
    title: string;
    groupId: string | null; // null indicates the Default Group
    isSelected: boolean;
    name: string;
    guidance: string;
    required: boolean;
    default: string;
    conditions: Condition[];
    validations: Validation[];
}

export interface Condition {
    id: string;
    field: string;
    comparator: string;
    value: string;
}

export interface Validation {
    id: string;
    message: string;
    comparator: string;
    value: string;
}

export interface Group {
    id: string;
    name: string;
    questions: Question[];
}

export interface FormBuilderState {
    questions: Question[];
    groups: Group[];
}

export interface UseFormBuilderState {
    questions: Question[];
    groups: Group[];
    addQuestion: () => void;
    addGroup: () => void;
    moveQuestion: (questionId: string, targetGroupId: string | null) => void;
    updateGroupName: (groupId: string, newName: string) => void;
    updateQuestionTitle: (questionId: string, newTitle: string) => void;
    updateQuestionIsSelected: (questionId: string, isSelected: boolean) => void;
    removeSelectedQuestions: () => void;
    removeQuestionById: (questionId: string) => void;
    duplicateQuestion: (questionId: string) => void;
    updateQuestion: (questionId: string, data: any) => void;
    initializeQuestionsFromDatabase: (questions: Question[]) => void;
}
