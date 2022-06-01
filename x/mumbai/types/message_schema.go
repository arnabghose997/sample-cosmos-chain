package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCreatePost = "create_post"

var _ sdk.Msg = &MsgCreateSchema{}

func NewMsgCreatePost(creator string, sch *Schema) *MsgCreateSchema {
	return &MsgCreateSchema{
		Creator: creator,
		Schema:  sch,
	}
}

func (msg *MsgCreateSchema) Route() string {
	return RouterKey
}

func (msg *MsgCreateSchema) Type() string {
	return TypeMsgCreatePost
}

func (msg *MsgCreateSchema) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateSchema) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateSchema) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
