const range = {
    kb: 1000,
    mb: 1000 * 1024,
    gb: 1000 * 1024 * 1024
};

export const sizeInMb = (bytes) => {
    if (bytes < 0) bytes = bytes * -1;

    if (bytes < range.kb) return `${bytes} байт`;
    if (bytes >= range.kb && bytes < range.mb) return `${(bytes / 1024).toFixed(2)} Кб`;
    if (bytes >= range.mb && bytes < range.gb) return `${(bytes / 1024 / 1024).toFixed(2)} Мб`;
    if (bytes >= range.gb) return `${(bytes / 1024 / 1024 / 1024).toFixed(2)} Гб`;

    return `${bytes}`;
}
