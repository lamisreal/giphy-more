/**
 * @author lamisreal
 * @param value all value
 * @returns boolean type, if value satisfies the condition, then true, else false
 */
export function CheckNullOrUndefinedOrEmpty(value: any): boolean {
    return (
        value === null ||
        value === undefined ||
        value.length === 0 ||
        value === ""
    );
}