package keeper_test

import (
	"testing"

	testkeeper "github.com/earth/mumbai/testutil/keeper"
	"github.com/earth/mumbai/x/mumbai/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.MumbaiKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
