package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/earth/mumbai/x/mumbai/types"
)
	
func (k msgServer) CreateSchema(goCtx context.Context, msg *types.MsgCreateSchema) (*types.MsgCreateSchemaResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	var schema = types.Schema{
		Authored: msg.GetSchema().Authored,
		Schema: msg.GetSchema().GetSchema(),
	}
	id := k.AppendPost(ctx, schema)
	return &types.MsgCreateSchemaResponse{Id: id}, nil
  }
