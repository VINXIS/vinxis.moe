export default function damerauLevenshteinDistance (distance: number) {
    return function (a: string, b: string): boolean {
        const matrix = Array.from({ length: a.length + 1 }, () => Array.from({ length: b.length + 1 }, () => 0));
        for (let i = 1; i <= a.length; i++)
            matrix[i]![0] = i;
    
        for (let j = 1; j <= b.length; j++)
            matrix[0]![j] = j;
    
        for (let i = 1; i <= a.length; i++)
            for (let j = 1; j <= b.length; j++) {
                const cost = a[i] === b[j] ? 0 : 1;
    
                matrix[i]![j] = Math.min(
                    matrix[i - 1]![j]! + 1, // deletion
                    matrix[i]![j - 1]! + 1, // insertion
                    matrix[i - 1]![j - 1]! + cost // substitution
                );
            }
        return matrix[a.length]![b.length]! <= distance;
    };
}