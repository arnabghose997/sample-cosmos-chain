/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Schema } from "../mumbai/schema";

export const protobufPackage = "earth.mumbai.mumbai";

export interface MsgCreateSchema {
  creator: string;
  schema: Schema | undefined;
}

export interface MsgCreateSchemaResponse {
  id: number;
}

const baseMsgCreateSchema: object = { creator: "" };

export const MsgCreateSchema = {
  encode(message: MsgCreateSchema, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.schema !== undefined) {
      Schema.encode(message.schema, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateSchema {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateSchema } as MsgCreateSchema;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.schema = Schema.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateSchema {
    const message = { ...baseMsgCreateSchema } as MsgCreateSchema;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.schema !== undefined && object.schema !== null) {
      message.schema = Schema.fromJSON(object.schema);
    } else {
      message.schema = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateSchema): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.schema !== undefined &&
      (obj.schema = message.schema ? Schema.toJSON(message.schema) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateSchema>): MsgCreateSchema {
    const message = { ...baseMsgCreateSchema } as MsgCreateSchema;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.schema !== undefined && object.schema !== null) {
      message.schema = Schema.fromPartial(object.schema);
    } else {
      message.schema = undefined;
    }
    return message;
  },
};

const baseMsgCreateSchemaResponse: object = { id: 0 };

export const MsgCreateSchemaResponse = {
  encode(
    message: MsgCreateSchemaResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateSchemaResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateSchemaResponse,
    } as MsgCreateSchemaResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateSchemaResponse {
    const message = {
      ...baseMsgCreateSchemaResponse,
    } as MsgCreateSchemaResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateSchemaResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateSchemaResponse>
  ): MsgCreateSchemaResponse {
    const message = {
      ...baseMsgCreateSchemaResponse,
    } as MsgCreateSchemaResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateSchema(request: MsgCreateSchema): Promise<MsgCreateSchemaResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateSchema(request: MsgCreateSchema): Promise<MsgCreateSchemaResponse> {
    const data = MsgCreateSchema.encode(request).finish();
    const promise = this.rpc.request(
      "earth.mumbai.mumbai.Msg",
      "CreateSchema",
      data
    );
    return promise.then((data) =>
      MsgCreateSchemaResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
