import { useEffect, useState } from 'react'
import IconFermer from '../../../assets/icons/IconClosed.svg'
import { Question as QuestionType, Condition as ConditionType, Validation as ValidationType } from "../../../data/interfaces/FormBuilderTypes";

interface SettingsProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    question: QuestionType | null;
    updateQuestion: (questionId: string, data: any) => void;
    questions: QuestionType[];
}

interface TabProps {
    question: QuestionType | null;
    setQuestion: (question: QuestionType | any) => void;
    questions?: QuestionType[];
}

interface ConditionProps {
    questions: QuestionType[] | undefined;
    condition: ConditionType;
    setQuestion: (question: QuestionType | any) => void;
    removeCondition: (conditionId: string) => void;
}

interface ValidationProps {
    validation: ValidationType;
    setQuestion: (question: QuestionType | any) => void;
    removeValidation: (validationId: string) => void;
}

export default function Settings({ isOpen, setIsOpen, question, updateQuestion, questions }: SettingsProps) {
    const [activeTab, setActiveTab] = useState('options')
    const [localQuestion, setLocalQuestion] = useState<QuestionType | null>(null);
    const [filteredQuestions, setFilteredQuestions] = useState<QuestionType[]>([]);

    const tabs = [
        { id: 'options', label: 'Options de la question' },
        { id: 'logic', label: 'Logique de saut' },
        { id: 'validation', label: 'Critères de validation' }
    ]

    useEffect(() => {
        setLocalQuestion(question);
        setFilteredQuestions(questions.filter((questionItem) => questionItem.id !== question?.id));
    }, [question, isOpen]);

    const saveChanges = () => {
        if (!localQuestion) return;

        updateQuestion(localQuestion.id, localQuestion);
        setIsOpen(false);
    };

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg w-full max-w-2xl">
                        <div className="flex items-center justify-between p-6 border-b">
                            <h2 className="text-xl font-semibold">Paramètres de la question</h2>
                            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
                                <img src={IconFermer} alt="Fermer" className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="border-b">
                            <nav className="flex">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`px-6 py-4 font-medium ${activeTab === tab.id
                                            ? 'text-gray-900 border-b-2 border-gray-900'
                                            : 'text-gray-500 hover:text-gray-700'
                                            }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </nav>
                        </div>

                        <div className="p-6">
                            {activeTab === 'options' && <OptionsTab question={localQuestion} setQuestion={setLocalQuestion} />}
                            {activeTab === 'logic' && <LogicTab question={localQuestion} setQuestion={setLocalQuestion} questions={filteredQuestions} />}
                            {activeTab === 'validation' && <ValidationTab question={localQuestion} setQuestion={setLocalQuestion} />}
                        </div>

                        <div className="flex justify-end gap-3 p-6 border-t bg-gray-50">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="px-4 py-2 text-gray-700 border rounded-md hover:bg-gray-50"
                            >
                                Annuler
                            </button>
                            <button className="px-4 py-2 text-white bg-gray-700 rounded-md hover:bg-gray-800" onClick={saveChanges}>
                                Enregistrer
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

function OptionsTab({ question, setQuestion }: TabProps) {
    return (
        <div className="space-y-6">
            <div>
                <label className="block text-sm text-gray-700 mb-1">
                    Libellé de la colonne de données
                </label>
                <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Question 01"
                    value={question?.name}
                    onChange={(e) => setQuestion({ ...question, name: e.target.value })}
                />
            </div>

            <div>
                <label className="block text-sm text-gray-700 mb-1">
                    Indice supplémentaire:
                </label>
                <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md"
                    value={question?.guidance}
                    onChange={(e) => setQuestion({ ...question, guidance: e.target.value })}
                />
            </div>

            <div>
                <label className="block text-sm text-gray-700 mb-1">
                    Valeur par défaut:
                </label>
                <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md"
                    value={question?.default}
                    onChange={(e) => setQuestion({ ...question, default: e.target.value })}
                />
            </div>

            <div>
                <label className="block text-sm text-gray-700 mb-4">
                    Réponse obligatoire
                </label>
                <div className="space-y-2">
                    <label className="flex items-center gap-2">
                        <input type="radio" name="required" className="w-4 h-4" checked={question?.required} onChange={(e) => setQuestion({ ...question, required: e.target.checked })} />
                        <span>Oui</span>
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="radio" name="required" className="w-4 h-4" checked={!question?.required} onChange={(e) => setQuestion({ ...question, required: e.target.checked })} />
                        <span>Non</span>
                    </label>
                </div>
            </div>
        </div>
    )
}

function LogicTab({ questions, question, setQuestion }: TabProps) {
    const addNewCondition = () => {
        if (!question) return;
        setQuestion({ ...question, conditions: [...question.conditions, { field: "", comparator: "", value: "", id: `${question.conditions.length + 1}` }] });
    };

    const removeCondition = (conditionId: string) => {
        if (!question) return;
        setQuestion({ ...question, conditions: question.conditions.filter((condition) => condition.id !== conditionId) });
    };
    return (
        <div className="space-y-6">
            <button className="w-full py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800" onClick={addNewCondition}>
                Ajouter une condition
            </button>

            {/*
            Put the conditions inside a div container with y scrolling
             */}

            {question && question.conditions.length > 0 && (<div className="overflow-y-scroll max-h-96 flex flex-col gap-4">{question.conditions.map((condition, index) => (
                <Condition key={index} condition={condition} questions={questions} setQuestion={setQuestion} removeCondition={removeCondition} />
            ))}</div>)}

        </div>
    )
}

function Condition({ questions, setQuestion, condition, removeCondition }: ConditionProps) {
    const updateConditionBasedOnFieldandConditionId = (field: string, value: string, conditionId: string) => {
        setQuestion((prev: QuestionType) => ({
            ...prev, conditions: prev.conditions.map((conditionItem: ConditionType) => {
                if (conditionItem.id === conditionId) {
                    return { ...conditionItem, [field]: value };
                }
                return conditionItem;
            })
        }));
    };
    return (<div className="border rounded-md p-4 space-y-4">
        <div className="flex justify-between items-center">
            <span className="text-gray-500">Condition</span>
            <button className="text-gray-400 hover:text-gray-600" onClick={() => removeCondition(condition.id)}>
                <img src={IconFermer} alt="Fermer" className="w-5 h-5" />
            </button>
        </div>

        <div>
            <label className="block text-sm text-gray-700 mb-1">
                Sélectionnez la question précédente:
            </label>
            <select className="w-full px-3 py-2 border rounded-md" value={condition.field} onChange={(e) => updateConditionBasedOnFieldandConditionId("field", e.target.value, condition.id)}>
                {questions && questions.map((question) => (
                    <option key={question.id}>{question.name}</option>
                ))}
            </select>
        </div>

        <div>
            <label className="block text-sm text-gray-700 mb-1">
                Définir la condition:
            </label>
            <select className="w-full px-3 py-2 border rounded-md" value={condition.comparator} onChange={(e) => updateConditionBasedOnFieldandConditionId("comparator", e.target.value, condition.id)}>
                <option>=</option>
                <option>!=</option>
                <option>&gt;</option>
                <option>&lt;</option>
                <option>&gt;=</option>
                <option>&lt;=</option>
            </select>
        </div>

        <div>
            <label className="block text-sm text-gray-700 mb-1">
                Valeur attendue:
            </label>
            <input type="text" className="w-full px-3 py-2 border rounded-md" value={condition.value} onChange={(e) => updateConditionBasedOnFieldandConditionId("value", e.target.value, condition.id)} />
        </div>
    </div>);
}

function ValidationTab({ questions, question, setQuestion }: TabProps) {
    const addNewValidation = () => {
        if (!question) return;
        setQuestion({ ...question, validations: [...question.validations, { comparator: "", value: "", message: "", id: `${question.validations.length + 1}` }] });
    };
    const removeValidation = (validationId: string) => {
        if (!question) return;
        setQuestion({ ...question, validations: question.validations.filter((validation) => validation.id !== validationId) });
    };
    return (
        <div className="space-y-6">
            <button className="w-full py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800" onClick={addNewValidation}>
                Ajouter une condition
            </button>

            {question && question.validations.length > 0 && (<div className="overflow-y-scroll max-h-96 flex flex-col gap-4">{question.validations.map((validation, index) => (
                <Validation key={index} validation={validation} setQuestion={setQuestion} removeValidation={removeValidation} />
            ))}</div>)}
            
        </div>
    )
}

function Validation({ setQuestion,validation, removeValidation }: ValidationProps) {
    const updateValidationBasedOnFieldandValidationId = (field: string, value: string, validationId: string) => {
        setQuestion((prev: QuestionType) => ({
            ...prev, validations: prev.validations.map((validationItem: ValidationType) => {
                if (validationItem.id === validationId) {
                    return { ...validationItem, [field]: value };
                }
                return validationItem;
            })
        }));
    };
    
    return (<div className="border rounded-md p-4 space-y-4">
        <div className="flex justify-between items-center">
            <span className="text-gray-500">Condition 01</span>
            <button className="text-gray-400 hover:text-gray-600" onClick={() => removeValidation(validation.id)}>
                <img src={IconFermer} alt="Fermer" className="w-5 h-5" />
            </button>
        </div>

        <div>
            <label className="block text-sm text-gray-700 mb-1">
                La réponse à cette question doit être:
            </label>
            <select className="w-full px-3 py-2 border rounded-md" value={validation.comparator} onChange={(e) => updateValidationBasedOnFieldandValidationId("comparator", e.target.value, validation.id)}>
                <option>=</option>
                <option>!=</option>
                <option>&gt;</option>
                <option>&lt;</option>
                <option>&gt;=</option>
                <option>&lt;=</option>
            </select>
        </div>

        <div>
            <label className="block text-sm text-gray-700 mb-1">
                Valeur attendue:
            </label>
            <input type="text" className="w-full px-3 py-2 border rounded-md" value={validation.value} onChange={(e) => updateValidationBasedOnFieldandValidationId("value", e.target.value, validation.id)} />
        </div>

        <div>
            <label className="block text-sm text-gray-700 mb-1">
                Message d'erreur:
            </label>
            <input type="text" className="w-full px-3 py-2 border rounded-md" value={validation.message} onChange={(e) => updateValidationBasedOnFieldandValidationId("message", e.target.value, validation.id)} />
        </div>
    </div>);
}

