package cli

import (
	"testing"

	//"github.com/cosmos/cosmos-sdk/codec"
	unknownproto "github.com/cosmos/cosmos-sdk/codec/unknownproto"
	"github.com/earth/mumbai/x/mumbai/types"
	//"github.com/stretchr/testify/require"
)

func TestProtoMap(t *testing.T) {
	var property types.Property = types.Property{
		Type:   "string",
		Format: "Some format",
	}

	propertyMap := make(map[string]*types.Property)
	propertyMap["emailAddress"] = &property

	var schemaPropertyStruct types.SchemaProperty = types.SchemaProperty{
		Properties: propertyMap,
	}

	var schema types.Schema = types.Schema{
		Authored: "did:hs:123",
		Schema:   &schemaPropertyStruct,
	}

	m, _ := schema.Marshal()
	actualResult, err := unknownproto.RejectUnknownFields(m, &types.Schema{}, true, unknownproto.DefaultAnyResolver{})
	
	expectedResult := true
	
	if actualResult != expectedResult {
		t.Errorf(err.Error())
	}
}
