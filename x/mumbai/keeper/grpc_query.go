package keeper

import (
	"github.com/earth/mumbai/x/mumbai/types"
)

var _ types.QueryServer = Keeper{}
