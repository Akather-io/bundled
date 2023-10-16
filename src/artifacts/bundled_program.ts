export type BundledProgram = {
    "version": "0.1.0",
    "name": "bundled_program",
    "instructions": [
        {
            "name": "initialize",
            "accounts": [
                {
                    "name": "system",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "authority",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "rent",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": []
        },
        {
            "name": "createProviderPool",
            "accounts": [
                {
                    "name": "pool",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "strageties",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "usdcMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "usdcPoolTokenAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "auth",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "associatedTokenProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "rent",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "expiredAt",
                    "type": "i64"
                },
                {
                    "name": "fee",
                    "type": "u64"
                },
                {
                    "name": "share",
                    "type": "u64"
                },
                {
                    "name": "jProbability",
                    "type": "u8"
                },
                {
                    "name": "jReturn",
                    "type": "u8"
                },
                {
                    "name": "jCost",
                    "type": "u8"
                },
                {
                    "name": "strategies",
                    "type": {
                        "vec": {
                            "defined": "Strategy"
                        }
                    }
                }
            ]
        },
        {
            "name": "join",
            "accounts": [
                {
                    "name": "pool",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "usdcMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "usdcUserTokenAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "usdcPoolTokenAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "userPool",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "auth",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "associatedTokenProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "rent",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "optNum",
                    "type": "u8"
                },
                {
                    "name": "amount",
                    "type": "u64"
                }
            ]
        }
    ],
    "accounts": [
        {
            "name": "providerPool",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "admin",
                        "type": "publicKey"
                    },
                    {
                        "name": "expiredAt",
                        "type": "i64"
                    },
                    {
                        "name": "fee",
                        "type": "u64"
                    },
                    {
                        "name": "share",
                        "type": "u64"
                    },
                    {
                        "name": "jProbability",
                        "type": {
                            "defined": "JudgementLevel"
                        }
                    },
                    {
                        "name": "jReturn",
                        "type": {
                            "defined": "JudgementLevel"
                        }
                    },
                    {
                        "name": "jCost",
                        "type": {
                            "defined": "JudgementLevel"
                        }
                    }
                ]
            }
        },
        {
            "name": "strategies",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "pool",
                        "type": "publicKey"
                    },
                    {
                        "name": "strategies",
                        "type": {
                            "vec": {
                                "defined": "Strategy"
                            }
                        }
                    }
                ]
            }
        },
        {
            "name": "systemSetting",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "admin",
                        "type": "publicKey"
                    },
                    {
                        "name": "initialized",
                        "type": "bool"
                    }
                ]
            }
        },
        {
            "name": "userPool",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "pool",
                        "type": "publicKey"
                    },
                    {
                        "name": "optNum",
                        "type": "u8"
                    },
                    {
                        "name": "deposit",
                        "type": "u64"
                    }
                ]
            }
        }
    ],
    "types": [
        {
            "name": "Strategy",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "tokenSymbol",
                        "type": "string"
                    },
                    {
                        "name": "weight",
                        "type": "u8"
                    },
                    {
                        "name": "longCall",
                        "type": {
                            "option": {
                                "defined": "StrategyCall"
                            }
                        }
                    },
                    {
                        "name": "shortCall",
                        "type": {
                            "option": {
                                "defined": "StrategyCall"
                            }
                        }
                    },
                    {
                        "name": "longPut",
                        "type": {
                            "option": {
                                "defined": "StrategyCall"
                            }
                        }
                    },
                    {
                        "name": "shortPut",
                        "type": {
                            "option": {
                                "defined": "StrategyCall"
                            }
                        }
                    }
                ]
            }
        },
        {
            "name": "StrategyCall",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "strikePrice",
                        "type": "u64"
                    },
                    {
                        "name": "portion",
                        "type": "u8"
                    }
                ]
            }
        },
        {
            "name": "JudgementLevel",
            "type": {
                "kind": "enum",
                "variants": [
                    {
                        "name": "HIGH"
                    },
                    {
                        "name": "MEDIUM"
                    },
                    {
                        "name": "LOW"
                    }
                ]
            }
        }
    ],
    "errors": [
        {
            "code": 6000,
            "name": "InvalidAmount",
            "msg": "Invalid amount"
        },
        {
            "code": 6001,
            "name": "AlreadyInitialized",
            "msg": "Already initialized"
        },
        {
            "code": 6002,
            "name": "InvalidOptionNumber",
            "msg": "Invalid option number"
        }
    ]
};

export const IDL: BundledProgram = {
    "version": "0.1.0",
    "name": "bundled_program",
    "instructions": [
        {
            "name": "initialize",
            "accounts": [
                {
                    "name": "system",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "authority",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "rent",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": []
        },
        {
            "name": "createProviderPool",
            "accounts": [
                {
                    "name": "pool",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "strageties",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "usdcMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "usdcPoolTokenAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "auth",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "associatedTokenProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "rent",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "expiredAt",
                    "type": "i64"
                },
                {
                    "name": "fee",
                    "type": "u64"
                },
                {
                    "name": "share",
                    "type": "u64"
                },
                {
                    "name": "jProbability",
                    "type": "u8"
                },
                {
                    "name": "jReturn",
                    "type": "u8"
                },
                {
                    "name": "jCost",
                    "type": "u8"
                },
                {
                    "name": "strategies",
                    "type": {
                        "vec": {
                            "defined": "Strategy"
                        }
                    }
                }
            ]
        },
        {
            "name": "join",
            "accounts": [
                {
                    "name": "pool",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "usdcMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "usdcUserTokenAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "usdcPoolTokenAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "userPool",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "auth",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "associatedTokenProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "rent",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "optNum",
                    "type": "u8"
                },
                {
                    "name": "amount",
                    "type": "u64"
                }
            ]
        }
    ],
    "accounts": [
        {
            "name": "providerPool",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "admin",
                        "type": "publicKey"
                    },
                    {
                        "name": "expiredAt",
                        "type": "i64"
                    },
                    {
                        "name": "fee",
                        "type": "u64"
                    },
                    {
                        "name": "share",
                        "type": "u64"
                    },
                    {
                        "name": "jProbability",
                        "type": {
                            "defined": "JudgementLevel"
                        }
                    },
                    {
                        "name": "jReturn",
                        "type": {
                            "defined": "JudgementLevel"
                        }
                    },
                    {
                        "name": "jCost",
                        "type": {
                            "defined": "JudgementLevel"
                        }
                    }
                ]
            }
        },
        {
            "name": "strategies",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "pool",
                        "type": "publicKey"
                    },
                    {
                        "name": "strategies",
                        "type": {
                            "vec": {
                                "defined": "Strategy"
                            }
                        }
                    }
                ]
            }
        },
        {
            "name": "systemSetting",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "admin",
                        "type": "publicKey"
                    },
                    {
                        "name": "initialized",
                        "type": "bool"
                    }
                ]
            }
        },
        {
            "name": "userPool",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "pool",
                        "type": "publicKey"
                    },
                    {
                        "name": "optNum",
                        "type": "u8"
                    },
                    {
                        "name": "deposit",
                        "type": "u64"
                    }
                ]
            }
        }
    ],
    "types": [
        {
            "name": "Strategy",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "tokenSymbol",
                        "type": "string"
                    },
                    {
                        "name": "weight",
                        "type": "u8"
                    },
                    {
                        "name": "longCall",
                        "type": {
                            "option": {
                                "defined": "StrategyCall"
                            }
                        }
                    },
                    {
                        "name": "shortCall",
                        "type": {
                            "option": {
                                "defined": "StrategyCall"
                            }
                        }
                    },
                    {
                        "name": "longPut",
                        "type": {
                            "option": {
                                "defined": "StrategyCall"
                            }
                        }
                    },
                    {
                        "name": "shortPut",
                        "type": {
                            "option": {
                                "defined": "StrategyCall"
                            }
                        }
                    }
                ]
            }
        },
        {
            "name": "StrategyCall",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "strikePrice",
                        "type": "u64"
                    },
                    {
                        "name": "portion",
                        "type": "u8"
                    }
                ]
            }
        },
        {
            "name": "JudgementLevel",
            "type": {
                "kind": "enum",
                "variants": [
                    {
                        "name": "HIGH"
                    },
                    {
                        "name": "MEDIUM"
                    },
                    {
                        "name": "LOW"
                    }
                ]
            }
        }
    ],
    "errors": [
        {
            "code": 6000,
            "name": "InvalidAmount",
            "msg": "Invalid amount"
        },
        {
            "code": 6001,
            "name": "AlreadyInitialized",
            "msg": "Already initialized"
        },
        {
            "code": 6002,
            "name": "InvalidOptionNumber",
            "msg": "Invalid option number"
        }
    ]
};
