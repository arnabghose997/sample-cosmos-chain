package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/earth/mumbai/x/mumbai/types"
)

func (k Keeper) AppendPost(ctx sdk.Context, schema types.Schema) uint64 {
	id := []byte(schema.Authored)
	schBytes := k.cdc.MustMarshal(&schema)
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.SchemaKey))
	store.Set(id, schBytes)
	var count uint64 = 1
	return count
}
