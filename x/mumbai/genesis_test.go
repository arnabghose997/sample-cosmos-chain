package mumbai_test

import (
	"testing"

	keepertest "github.com/earth/mumbai/testutil/keeper"
	"github.com/earth/mumbai/testutil/nullify"
	"github.com/earth/mumbai/x/mumbai"
	"github.com/earth/mumbai/x/mumbai/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.MumbaiKeeper(t)
	mumbai.InitGenesis(ctx, *k, genesisState)
	got := mumbai.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
