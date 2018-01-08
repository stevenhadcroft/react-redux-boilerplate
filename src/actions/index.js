/*TODO : split actions into multiple files, otherwise this is gunna get MASSIVE!!! */

export const genericAction = (type, state) => ({
    type,
    state
});

export const navToPage = (id, ignoreHistory) => ({
    type: 'NAV_TO_PAGE',
    pageId: id,
    ignoreHistory:ignoreHistory
});

