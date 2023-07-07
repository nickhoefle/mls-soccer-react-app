const matchingPositions = {
    df: ['df', 'mfdf', 'dfmf', 'fwdf', 'dffw'],
    mf: ['mf', 'dfmf', 'mfdf', 'fwdf', 'dffw'],
    fw: ['fw', 'fwmf', 'mffw', 'fwdf', 'dffw'],
    fwmf: ['fwmf', 'mffw', 'fw', 'mf', 'mfdf', 'dfmf'],
    mffw: ['fwmf', 'mffw', 'fw', 'mf', 'mfdf', 'dfmf'],
    mfdf: ['mf', 'df', 'mfdf', 'dfmf', 'mffw', 'fwmf', 'dffw', 'fwdf'],
    dfmf: ['mf', 'df', 'mfdf', 'dfmf', 'mffw', 'fwmf', 'dffw', 'fwdf'],
    fwdf: ['fwdf', 'dffw', 'df', 'fw', 'mfdf', 'dfmf', 'fwmf', 'mffw'],
    dffw: ['fwdf', 'dffw', 'df', 'fw', 'mfdf', 'dfmf', 'fwmf', 'mffw'],
};

export default matchingPositions;