/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "earth.mumbai.mumbai";

export interface Schema {
  authored: string;
  schema: SchemaProperty | undefined;
}

export interface SchemaProperty {
  properties: { [key: string]: Property };
}

export interface SchemaProperty_PropertiesEntry {
  key: string;
  value: Property | undefined;
}

export interface Property {
  type: string;
  format: string;
}

const baseSchema: object = { authored: "" };

export const Schema = {
  encode(message: Schema, writer: Writer = Writer.create()): Writer {
    if (message.authored !== "") {
      writer.uint32(10).string(message.authored);
    }
    if (message.schema !== undefined) {
      SchemaProperty.encode(message.schema, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Schema {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSchema } as Schema;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authored = reader.string();
          break;
        case 2:
          message.schema = SchemaProperty.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Schema {
    const message = { ...baseSchema } as Schema;
    if (object.authored !== undefined && object.authored !== null) {
      message.authored = String(object.authored);
    } else {
      message.authored = "";
    }
    if (object.schema !== undefined && object.schema !== null) {
      message.schema = SchemaProperty.fromJSON(object.schema);
    } else {
      message.schema = undefined;
    }
    return message;
  },

  toJSON(message: Schema): unknown {
    const obj: any = {};
    message.authored !== undefined && (obj.authored = message.authored);
    message.schema !== undefined &&
      (obj.schema = message.schema
        ? SchemaProperty.toJSON(message.schema)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Schema>): Schema {
    const message = { ...baseSchema } as Schema;
    if (object.authored !== undefined && object.authored !== null) {
      message.authored = object.authored;
    } else {
      message.authored = "";
    }
    if (object.schema !== undefined && object.schema !== null) {
      message.schema = SchemaProperty.fromPartial(object.schema);
    } else {
      message.schema = undefined;
    }
    return message;
  },
};

const baseSchemaProperty: object = {};

export const SchemaProperty = {
  encode(message: SchemaProperty, writer: Writer = Writer.create()): Writer {
    Object.entries(message.properties).forEach(([key, value]) => {
      SchemaProperty_PropertiesEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SchemaProperty {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSchemaProperty } as SchemaProperty;
    message.properties = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = SchemaProperty_PropertiesEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry1.value !== undefined) {
            message.properties[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SchemaProperty {
    const message = { ...baseSchemaProperty } as SchemaProperty;
    message.properties = {};
    if (object.properties !== undefined && object.properties !== null) {
      Object.entries(object.properties).forEach(([key, value]) => {
        message.properties[key] = Property.fromJSON(value);
      });
    }
    return message;
  },

  toJSON(message: SchemaProperty): unknown {
    const obj: any = {};
    obj.properties = {};
    if (message.properties) {
      Object.entries(message.properties).forEach(([k, v]) => {
        obj.properties[k] = Property.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<SchemaProperty>): SchemaProperty {
    const message = { ...baseSchemaProperty } as SchemaProperty;
    message.properties = {};
    if (object.properties !== undefined && object.properties !== null) {
      Object.entries(object.properties).forEach(([key, value]) => {
        if (value !== undefined) {
          message.properties[key] = Property.fromPartial(value);
        }
      });
    }
    return message;
  },
};

const baseSchemaProperty_PropertiesEntry: object = { key: "" };

export const SchemaProperty_PropertiesEntry = {
  encode(
    message: SchemaProperty_PropertiesEntry,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Property.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): SchemaProperty_PropertiesEntry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSchemaProperty_PropertiesEntry,
    } as SchemaProperty_PropertiesEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = Property.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SchemaProperty_PropertiesEntry {
    const message = {
      ...baseSchemaProperty_PropertiesEntry,
    } as SchemaProperty_PropertiesEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Property.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: SchemaProperty_PropertiesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? Property.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SchemaProperty_PropertiesEntry>
  ): SchemaProperty_PropertiesEntry {
    const message = {
      ...baseSchemaProperty_PropertiesEntry,
    } as SchemaProperty_PropertiesEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Property.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseProperty: object = { type: "", format: "" };

export const Property = {
  encode(message: Property, writer: Writer = Writer.create()): Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.format !== "") {
      writer.uint32(18).string(message.format);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Property {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProperty } as Property;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.format = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Property {
    const message = { ...baseProperty } as Property;
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    if (object.format !== undefined && object.format !== null) {
      message.format = String(object.format);
    } else {
      message.format = "";
    }
    return message;
  },

  toJSON(message: Property): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.format !== undefined && (obj.format = message.format);
    return obj;
  },

  fromPartial(object: DeepPartial<Property>): Property {
    const message = { ...baseProperty } as Property;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    if (object.format !== undefined && object.format !== null) {
      message.format = object.format;
    } else {
      message.format = "";
    }
    return message;
  },
};

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
