export const isFormValid = (fields: string[], conditions: boolean[]) : boolean => {
    const hasEmptyField = fields.some(field => field.trim().length === 0);
    const hasInvalidCondition = conditions.some(condition => !condition);

    return !hasEmptyField && !hasInvalidCondition;
}
