import { PawnSnippet } from '../types/sampTypes';

export const pawnSnippets: PawnSnippet[] = [
    // Function Declarations
    {
        name: 'public',
        snippet: [
            'public ${1:FunctionName}(${2:params})',
            '{',
            '\t${0}',
            '}'
        ].join('\n'),
        description: 'Create a public function'
    },
    {
        name: 'forward',
        snippet: 'forward ${1:FunctionName}(${2:params});',
        description: 'Forward declaration of a function'
    },
    {
        name: 'native',
        snippet: 'native ${1:FunctionName}(${2:params});',
        description: 'Native function declaration'
    },
    {
        name: 'stock',
        snippet: [
            'stock ${1:FunctionName}(${2:params})',
            '{',
            '\t${0}',
            '}'
        ].join('\n'),
        description: 'Create a stock function'
    },

    // Control Structures
    {
        name: 'if',
        snippet: [
            'if (${1:condition})',
            '{',
            '\t${0}',
            '}'
        ].join('\n'),
        description: 'If statement'
    },
    {
        name: 'ifelse',
        snippet: [
            'if (${1:condition})',
            '{',
            '\t${2}',
            '}',
            'else',
            '{',
            '\t${0}',
            '}'
        ].join('\n'),
        description: 'If-else statement'
    },
    {
        name: 'for',
        snippet: [
            'for (${1:new i = 0}; ${2:i < count}; ${3:i++})',
            '{',
            '\t${0}',
            '}'
        ].join('\n'),
        description: 'For loop'
    },
    {
        name: 'while',
        snippet: [
            'while (${1:condition})',
            '{',
            '\t${0}',
            '}'
        ].join('\n'),
        description: 'While loop'
    },
    {
        name: 'do',
        snippet: [
            'do',
            '{',
            '\t${1}',
            '} while (${2:condition});'
        ].join('\n'),
        description: 'Do-while loop'
    },
    {
        name: 'switch',
        snippet: [
            'switch (${1:expression})',
            '{',
            '\tcase ${2:value}:',
            '\t\t${3}',
            '\t\tbreak;',
            '\tdefault:',
            '\t\t${0}',
            '}'
        ].join('\n'),
        description: 'Switch statement'
    },

    // Declarations
    {
        name: 'enum',
        snippet: [
            'enum ${1:EnumName}',
            '{',
            '\t${0}',
            '}'
        ].join('\n'),
        description: 'Enum declaration'
    },
    {
        name: 'define',
        snippet: '#define ${1:CONSTANT_NAME} ${2:value}',
        description: 'Define a constant'
    },
    {
        name: 'include',
        snippet: '#include <${1:filename}>',
        description: 'Include a file'
    },

    // SA-MP Specific
    {
        name: 'dialogresponse',
        snippet: [
            'public OnDialogResponse(playerid, dialogid, response, listitem, const inputtext[])',
            '{',
            '\tif (dialogid == ${1:DIALOG_ID})',
            '\t{',
            '\t\tif (response) // Clicked "OK" or pressed ENTER',
            '\t\t{',
            '\t\t\t${2}',
            '\t\t}',
            '\t\telse // Clicked "Cancel" or pressed ESC',
            '\t\t{',
            '\t\t\t${3}',
            '\t\t}',
            '\t\treturn 1;',
            '\t}',
            '\treturn 0;',
            '}'
        ].join('\n'),
        description: 'Dialog response callback'
    },
    {
        name: 'cmd',
        snippet: [
            'CMD:${1:commandname}(playerid, params[])',
            '{',
            '\t${0}',
            '\treturn 1;',
            '}'
        ].join('\n'),
        description: 'Command handler function'
    },
    {
        name: 'timer',
        snippet: [
            'forward ${1:TimerName}(${2:params});',
            'public ${1:TimerName}(${2:params})',
            '{',
            '\t${0}',
            '}'
        ].join('\n'),
        description: 'Timer function template'
    },
    {
        name: 'gamemode',
        snippet: [
            '#include <a_samp>',
            '',
            '#define GAMEMODE_VERSION "1.0"',
            '',
            'main()',
            '{',
            '\tprint("\\n----------------------------------");',
            '\tprint(" Gamemode loading... ");',
            '\tprint("----------------------------------\\n");',
            '}',
            '',
            'public OnGameModeInit()',
            '{',
            '\tSetGameModeText("${1:Gamemode Name} " GAMEMODE_VERSION);',
            '\t${0}',
            '\treturn 1;',
            '}',
            '',
            'public OnGameModeExit()',
            '{',
            '\treturn 1;',
            '}',
            '',
            'public OnPlayerConnect(playerid)',
            '{',
            '\treturn 1;',
            '}',
            '',
            'public OnPlayerDisconnect(playerid, reason)',
            '{',
            '\treturn 1;',
            '}'
        ].join('\n'),
        description: 'Basic gamemode template'
    }
];
