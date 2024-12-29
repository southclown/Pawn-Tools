import { SAMPFunction } from '../types/sampTypes';

export const sampFunctions: SAMPFunction[] = [
    // Message Functions
    {
        name: 'SendClientMessage',
        snippet: 'SendClientMessage(${1:playerid}, ${2:color}, const ${3:message}[]);',
        description: 'Sends a message to a specific player',
        parameters: ['playerid', 'color', 'const message[]']
    },
    {
        name: 'SendClientMessageToAll',
        snippet: 'SendClientMessageToAll(${1:color}, const ${2:message}[]);',
        description: 'Sends a message to all players',
        parameters: ['color', 'const message[]']
    },
    {
        name: 'SendPlayerMessageToPlayer',
        snippet: 'SendPlayerMessageToPlayer(${1:playerid}, ${2:senderid}, const ${3:message}[]);',
        description: 'Sends a message to a player on behalf of another player',
        parameters: ['playerid', 'senderid', 'const message[]']
    },
    {
        name: 'SendDeathMessage',
        snippet: 'SendDeathMessage(${1:killer}, ${2:killee}, ${3:weapon});',
        description: 'Adds a death to the death list',
        parameters: ['killer', 'killee', 'weapon']
    },

    // Player Functions
    {
        name: 'GetPlayerName',
        snippet: 'GetPlayerName(${1:playerid}, ${2:name}[], ${3:len});',
        description: 'Gets a player\'s name',
        parameters: ['playerid', 'name[]', 'len']
    },
    {
        name: 'SetPlayerPos',
        snippet: 'SetPlayerPos(${1:playerid}, Float:${2:x}, Float:${3:y}, Float:${4:z});',
        description: 'Sets a player\'s position',
        parameters: ['playerid', 'Float:x', 'Float:y', 'Float:z']
    },
    {
        name: 'GetPlayerPos',
        snippet: 'GetPlayerPos(${1:playerid}, &Float:${2:x}, &Float:${3:y}, &Float:${4:z});',
        description: 'Gets a player\'s position',
        parameters: ['playerid', '&Float:x', '&Float:y', '&Float:z']
    },
    {
        name: 'SetPlayerHealth',
        snippet: 'SetPlayerHealth(${1:playerid}, Float:${2:health});',
        description: 'Sets a player\'s health',
        parameters: ['playerid', 'Float:health']
    },
    {
        name: 'GetPlayerHealth',
        snippet: 'GetPlayerHealth(${1:playerid}, &Float:${2:health});',
        description: 'Gets a player\'s health',
        parameters: ['playerid', '&Float:health']
    },
    {
        name: 'SetPlayerArmour',
        snippet: 'SetPlayerArmour(${1:playerid}, Float:${2:armour});',
        description: 'Sets a player\'s armour',
        parameters: ['playerid', 'Float:armour']
    },
    {
        name: 'GetPlayerArmour',
        snippet: 'GetPlayerArmour(${1:playerid}, &Float:${2:armour});',
        description: 'Gets a player\'s armour',
        parameters: ['playerid', '&Float:armour']
    },
    {
        name: 'SetPlayerSkin',
        snippet: 'SetPlayerSkin(${1:playerid}, ${2:skinid});',
        description: 'Sets a player\'s skin',
        parameters: ['playerid', 'skinid']
    },
    {
        name: 'GetPlayerSkin',
        snippet: 'GetPlayerSkin(${1:playerid});',
        description: 'Gets a player\'s skin',
        parameters: ['playerid']
    },
    {
        name: 'SetPlayerInterior',
        snippet: 'SetPlayerInterior(${1:playerid}, ${2:interiorid});',
        description: 'Sets a player\'s interior',
        parameters: ['playerid', 'interiorid']
    },
    {
        name: 'GetPlayerInterior',
        snippet: 'GetPlayerInterior(${1:playerid});',
        description: 'Gets a player\'s interior',
        parameters: ['playerid']
    },
    {
        name: 'SetPlayerVirtualWorld',
        snippet: 'SetPlayerVirtualWorld(${1:playerid}, ${2:worldid});',
        description: 'Sets a player\'s virtual world',
        parameters: ['playerid', 'worldid']
    },
    {
        name: 'GetPlayerVirtualWorld',
        snippet: 'GetPlayerVirtualWorld(${1:playerid});',
        description: 'Gets a player\'s virtual world',
        parameters: ['playerid']
    },

    // Money Functions
    {
        name: 'GivePlayerMoney',
        snippet: 'GivePlayerMoney(${1:playerid}, ${2:money});',
        description: 'Gives money to a player',
        parameters: ['playerid', 'money']
    },
    {
        name: 'GetPlayerMoney',
        snippet: 'GetPlayerMoney(${1:playerid});',
        description: 'Gets a player\'s money',
        parameters: ['playerid']
    },
    {
        name: 'ResetPlayerMoney',
        snippet: 'ResetPlayerMoney(${1:playerid});',
        description: 'Resets a player\'s money to \$0',
        parameters: ['playerid']
    },

    // Vehicle Functions
    {
        name: 'CreateVehicle',
        snippet: 'CreateVehicle(${1:vehicletype}, Float:${2:x}, Float:${3:y}, Float:${4:z}, Float:${5:rotation}, ${6:color1}, ${7:color2}, ${8:respawn_delay}, ${9:addsiren}=0);',
        description: 'Creates a vehicle',
        parameters: ['vehicletype', 'Float:x', 'Float:y', 'Float:z', 'Float:rotation', 'color1', 'color2', 'respawn_delay', 'addsiren']
    },
    {
        name: 'DestroyVehicle',
        snippet: 'DestroyVehicle(${1:vehicleid});',
        description: 'Destroys a vehicle',
        parameters: ['vehicleid']
    },
    {
        name: 'GetVehiclePos',
        snippet: 'GetVehiclePos(${1:vehicleid}, &Float:${2:x}, &Float:${3:y}, &Float:${4:z});',
        description: 'Gets a vehicle\'s position',
        parameters: ['vehicleid', '&Float:x', '&Float:y', '&Float:z']
    },
    {
        name: 'SetVehiclePos',
        snippet: 'SetVehiclePos(${1:vehicleid}, Float:${2:x}, Float:${3:y}, Float:${4:z});',
        description: 'Sets a vehicle\'s position',
        parameters: ['vehicleid', 'Float:x', 'Float:y', 'Float:z']
    },
    {
        name: 'GetVehicleZAngle',
        snippet: 'GetVehicleZAngle(${1:vehicleid}, &Float:${2:z_angle});',
        description: 'Gets a vehicle\'s Z angle (rotation)',
        parameters: ['vehicleid', '&Float:z_angle']
    },
    {
        name: 'SetVehicleZAngle',
        snippet: 'SetVehicleZAngle(${1:vehicleid}, Float:${2:z_angle});',
        description: 'Sets a vehicle\'s Z angle (rotation)',
        parameters: ['vehicleid', 'Float:z_angle']
    },
    {
        name: 'PutPlayerInVehicle',
        snippet: 'PutPlayerInVehicle(${1:playerid}, ${2:vehicleid}, ${3:seatid});',
        description: 'Puts a player in a vehicle',
        parameters: ['playerid', 'vehicleid', 'seatid']
    },
    {
        name: 'GetPlayerVehicleID',
        snippet: 'GetPlayerVehicleID(${1:playerid});',
        description: 'Gets the ID of the vehicle the player is in',
        parameters: ['playerid']
    },
    {
        name: 'GetPlayerVehicleSeat',
        snippet: 'GetPlayerVehicleSeat(${1:playerid});',
        description: 'Gets the seat ID the player is in',
        parameters: ['playerid']
    },
    {
        name: 'RepairVehicle',
        snippet: 'RepairVehicle(${1:vehicleid});',
        description: 'Fully repairs a vehicle',
        parameters: ['vehicleid']
    },

    // Dialog Functions
    {
        name: 'ShowPlayerDialog',
        snippet: 'ShowPlayerDialog(${1:playerid}, ${2:dialogid}, ${3:style}, const ${4:caption}[], const ${5:info}[], const ${6:button1}[], const ${7:button2}[]);',
        description: 'Shows a dialog to a player',
        parameters: ['playerid', 'dialogid', 'style', 'const caption[]', 'const info[]', 'const button1[]', 'const button2[]']
    },

    // TextDraw Functions
    {
        name: 'TextDrawCreate',
        snippet: 'TextDrawCreate(Float:${1:x}, Float:${2:y}, const ${3:text}[]);',
        description: 'Creates a textdraw',
        parameters: ['Float:x', 'Float:y', 'const text[]']
    },
    {
        name: 'TextDrawDestroy',
        snippet: 'TextDrawDestroy(${1:Text:text});',
        description: 'Destroys a textdraw',
        parameters: ['Text:text']
    },
    {
        name: 'TextDrawShowForPlayer',
        snippet: 'TextDrawShowForPlayer(${1:playerid}, ${2:Text:text});',
        description: 'Shows a textdraw for a player',
        parameters: ['playerid', 'Text:text']
    },
    {
        name: 'TextDrawHideForPlayer',
        snippet: 'TextDrawHideForPlayer(${1:playerid}, ${2:Text:text});',
        description: 'Hides a textdraw for a player',
        parameters: ['playerid', 'Text:text']
    },
    {
        name: 'TextDrawShowForAll',
        snippet: 'TextDrawShowForAll(${1:Text:text});',
        description: 'Shows a textdraw for all players',
        parameters: ['Text:text']
    },
    {
        name: 'TextDrawHideForAll',
        snippet: 'TextDrawHideForAll(${1:Text:text});',
        description: 'Hides a textdraw for all players',
        parameters: ['Text:text']
    },

    // 3D Text Functions
    {
        name: 'Create3DTextLabel',
        snippet: 'Create3DTextLabel(const ${1:text}[], ${2:color}, Float:${3:x}, Float:${4:y}, Float:${5:z}, Float:${6:DrawDistance}, ${7:virtualworld}, ${8:testLOS}=0);',
        description: 'Creates a 3D text label',
        parameters: ['const text[]', 'color', 'Float:x', 'Float:y', 'Float:z', 'Float:DrawDistance', 'virtualworld', 'testLOS']
    },
    {
        name: 'Delete3DTextLabel',
        snippet: 'Delete3DTextLabel(${1:Text3D:id});',
        description: 'Deletes a 3D text label',
        parameters: ['Text3D:id']
    },
    {
        name: 'Attach3DTextLabelToPlayer',
        snippet: 'Attach3DTextLabelToPlayer(${1:Text3D:id}, ${2:playerid}, Float:${3:OffsetX}, Float:${4:OffsetY}, Float:${5:OffsetZ});',
        description: 'Attaches a 3D text label to a player',
        parameters: ['Text3D:id', 'playerid', 'Float:OffsetX', 'Float:OffsetY', 'Float:OffsetZ']
    },
    {
        name: 'Attach3DTextLabelToVehicle',
        snippet: 'Attach3DTextLabelToVehicle(${1:Text3D:id}, ${2:vehicleid}, Float:${3:OffsetX}, Float:${4:OffsetY}, Float:${5:OffsetZ});',
        description: 'Attaches a 3D text label to a vehicle',
        parameters: ['Text3D:id', 'vehicleid', 'Float:OffsetX', 'Float:OffsetY', 'Float:OffsetZ']
    },

    // Timer Functions
    {
        name: 'SetTimer',
        snippet: 'SetTimer("${1:functionname}", ${2:interval}, ${3:repeating});',
        description: 'Creates a timer',
        parameters: ['const functionname[]', 'interval', 'repeating']
    },
    {
        name: 'KillTimer',
        snippet: 'KillTimer(${1:timerid});',
        description: 'Kills a timer',
        parameters: ['timerid']
    },

    // Object Functions
    {
        name: 'CreateObject',
        snippet: 'CreateObject(${1:modelid}, Float:${2:X}, Float:${3:Y}, Float:${4:Z}, Float:${5:rX}, Float:${6:rY}, Float:${7:rZ}, Float:${8:DrawDistance}=0.0);',
        description: 'Creates an object',
        parameters: ['modelid', 'Float:X', 'Float:Y', 'Float:Z', 'Float:rX', 'Float:rY', 'Float:rZ', 'Float:DrawDistance']
    },
    {
        name: 'DestroyObject',
        snippet: 'DestroyObject(${1:objectid});',
        description: 'Destroys an object',
        parameters: ['objectid']
    },
    {
        name: 'AttachObjectToPlayer',
        snippet: 'AttachObjectToPlayer(${1:objectid}, ${2:playerid}, Float:${3:OffsetX}, Float:${4:OffsetY}, Float:${5:OffsetZ}, Float:${6:rX}, Float:${7:rY}, Float:${8:rZ});',
        description: 'Attaches an object to a player',
        parameters: ['objectid', 'playerid', 'Float:OffsetX', 'Float:OffsetY', 'Float:OffsetZ', 'Float:rX', 'Float:rY', 'Float:rZ']
    },
    {
        name: 'AttachObjectToVehicle',
        snippet: 'AttachObjectToVehicle(${1:objectid}, ${2:vehicleid}, Float:${3:OffsetX}, Float:${4:OffsetY}, Float:${5:OffsetZ}, Float:${6:rX}, Float:${7:rY}, Float:${8:rZ});',
        description: 'Attaches an object to a vehicle',
        parameters: ['objectid', 'vehicleid', 'Float:OffsetX', 'Float:OffsetY', 'Float:OffsetZ', 'Float:rX', 'Float:rY', 'Float:rZ']
    },

    // Animation Functions
    {
        name: 'ApplyAnimation',
        snippet: 'ApplyAnimation(${1:playerid}, const ${2:animlib}[], const ${3:animname}[], Float:${4:fDelta}, ${5:loop}, ${6:lockx}, ${7:locky}, ${8:freeze}, ${9:time}, ${10:forcesync}=0);',
        description: 'Applies an animation to a player',
        parameters: ['playerid', 'const animlib[]', 'const animname[]', 'Float:fDelta', 'loop', 'lockx', 'locky', 'freeze', 'time', 'forcesync']
    },
    {
        name: 'ClearAnimations',
        snippet: 'ClearAnimations(${1:playerid}, ${2:forcesync}=0);',
        description: 'Clears any animations a player is performing',
        parameters: ['playerid', 'forcesync']
    },

    // Checkpoint Functions
    {
        name: 'SetPlayerCheckpoint',
        snippet: 'SetPlayerCheckpoint(${1:playerid}, Float:${2:x}, Float:${3:y}, Float:${4:z}, Float:${5:size});',
        description: 'Sets a checkpoint for a player',
        parameters: ['playerid', 'Float:x', 'Float:y', 'Float:z', 'Float:size']
    },
    {
        name: 'DisablePlayerCheckpoint',
        snippet: 'DisablePlayerCheckpoint(${1:playerid});',
        description: 'Disables the player\'s current checkpoint',
        parameters: ['playerid']
    },
    {
        name: 'SetPlayerRaceCheckpoint',
        snippet: 'SetPlayerRaceCheckpoint(${1:playerid}, ${2:type}, Float:${3:x}, Float:${4:y}, Float:${5:z}, Float:${6:nextx}, Float:${7:nexty}, Float:${8:nextz}, Float:${9:size});',
        description: 'Sets a race checkpoint for a player',
        parameters: ['playerid', 'type', 'Float:x', 'Float:y', 'Float:z', 'Float:nextx', 'Float:nexty', 'Float:nextz', 'Float:size']
    },
    {
        name: 'DisablePlayerRaceCheckpoint',
        snippet: 'DisablePlayerRaceCheckpoint(${1:playerid});',
        description: 'Disables the player\'s current race checkpoint',
        parameters: ['playerid']
    },

    // Weapon Functions
    {
        name: 'GivePlayerWeapon',
        snippet: 'GivePlayerWeapon(${1:playerid}, ${2:weaponid}, ${3:ammo});',
        description: 'Gives a weapon to a player',
        parameters: ['playerid', 'weaponid', 'ammo']
    },
    {
        name: 'ResetPlayerWeapons',
        snippet: 'ResetPlayerWeapons(${1:playerid});',
        description: 'Removes all weapons from a player',
        parameters: ['playerid']
    },
    {
        name: 'GetPlayerWeapon',
        snippet: 'GetPlayerWeapon(${1:playerid});',
        description: 'Gets the weapon a player is currently holding',
        parameters: ['playerid']
    },
    {
        name: 'GetPlayerWeaponData',
        snippet: 'GetPlayerWeaponData(${1:playerid}, ${2:slot}, &${3:weapons}, &${4:ammo});',
        description: 'Gets the weapon and ammo in a specific slot',
        parameters: ['playerid', 'slot', '&weapons', '&ammo']
    }
];
