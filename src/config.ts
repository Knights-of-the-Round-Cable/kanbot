interface configTypes {
    prefix: string;
    commands: commandTypes[];
};

interface commandTypes {
    command: string;
    response: () => string;
};

const config: configTypes = {
    prefix: "!",
    commands: [
        {
            command: "myIssues",
            response: () => {
                return "Your current assigned issues: ";
            }
        },
    ]
};

export const { prefix, commands } = config;